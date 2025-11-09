import { execa } from "execa";
import prompts from "prompts";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { cyan, green, yellow } from "kolorist";
import { detectPackageManager } from "../utils/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
	console.log(
		`\n${cyan(
			"create-screaming-dialca-react"
		)} - Vite React project setup with Screaming Architecture\n`
	);

	const { projectName } = await prompts({
		type: "text",
		name: "projectName",
		message: "Enter your project name:",
		initial: "my-app",
	});
	const projectPath = path.resolve(process.cwd(), projectName);
	if (fs.existsSync(projectPath)) {
		console.log(
			yellow(
				`\nDirectory ${projectName} already exists. Please choose a different name.\n`
			)
		);
		process.exit(1);
	}
	const { variant } = await prompts({
		type: "select",
		name: "variant",
		message: "Select a variant:",
		choices: [
			{ title: "React (JavaScript)", value: "react" },
			{ title: "React (TypeScript)", value: "react-ts" },
			{ title: "React + SWC", value: "react-swc" },
			{ title: "React + SWC (TypeScript)", value: "react-swc-ts" },
		],
	});
	const pkgManager = detectPackageManager();

    console.log(cyan(`\nDetected package manager: ${pkgManager}`));
    console.log(cyan(`\nCreating project with npx (for better compatibility)...`));
    
	await execa(
		"npx",
		["create-vite@latest", projectName, "--template", variant],
		{ stdio: "inherit" }
	);
	console.log(green(`\nProject ${projectName} created successfully.`));
	console.log(`\nAplying Screaming Architecture...`);
	await applyScreamingArchitecture(projectPath, variant);

	console.log(green(`\nScreaming Architecture applied successfully.`));
	console.log(cyan(`\nNext steps:`));
	console.log(yellow(`  cd ${projectName}`));
	console.log(yellow(`  ${pkgManager} install`));
	console.log(yellow(`  ${pkgManager} run dev\n`));
}

main().catch((err) => {
	console.error(yellow("\nAn error occurred:"), err);
	process.exit(1);
});

async function applyScreamingArchitecture(projectPath, variant) {
	const folders = ["app", "core", "features", "shared"];
	for (const folder of folders) {
		await fs.ensureDir(path.join(projectPath, "src", folder));
	}
    const isTypeScript = variant.includes("-ts");
    const ext = isTypeScript ? "tsx" : "jsx";
	const originalAppFile = path.join(projectPath, "src", `App.${ext}`);
    const appFile = path.join(projectPath, "src", "app", `App.${ext}`);
	if (fs.existsSync(originalAppFile)) {
		await fs.move(originalAppFile, appFile);
	}
	const mainFile = path.join(projectPath, "src", `main.${ext}`);
	let mainContent = await fs.readFile(mainFile, "utf-8");
	mainContent = mainContent.replace(
		`import App from './App.${ext}';`,
		`import App from './app/App.${ext}';`
	);
	await fs.writeFile(mainFile, mainContent, "utf-8");

	// Crear una feature de prueba
	const featurePath = path.join(projectPath, "src", "features", "example");
	await fs.ensureDir(featurePath);
	// Inserar carpets screaming en esta feature
	const featureFolders = [
		"components",
		"hooks",
		"utils",
		"pages",
		"constants",
		"types",
		"contexts",
		"stores",
		"services"
	];
    for (const folder of featureFolders) {
		await fs.ensureDir(path.join(featurePath, folder));
	}
    const readme = `
        # Screaming Architecture (by Dialcadev)

        Base Structure:

        \`\`\`
        src/
        ├── app/        # Application-level components and configurations
        ├── core/       # Application core (e.g., routing, theming)
        ├── features/   # Feature-based modules
        │   └── example/   # Example feature
        │       ├── components/  # Feature-specific components
        │       ├── hooks/       # Feature-specific hooks
        │       ├── utils/       # Feature-specific utilities
        │       ├── pages/       # Feature-specific pages
        │       ├── constants/   # Feature-specific constants
        │       ├── types/       # Feature-specific types (if using TypeScript)
        │       ├── contexts/    # Feature-specific contexts
        │       ├── stores/      # Feature-specific state management
        │       └── services/    # Feature-specific services (e.g., API calls)
        └── shared/    # Shared components, hooks, and utilities across features
        \`\`\`
    `
    await fs.writeFile(path.join(projectPath, "README_SCREAMING.md"), readme.trim(), "utf-8");
}
