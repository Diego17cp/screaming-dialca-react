# 🏗️ Screaming Dialca React

[![npm version](https://badge.fury.io/js/screaming-dialca-react.svg)](https://badge.fury.io/js/screaming-dialca-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Script to create Vite React Projects with Screaming Architecture automatically.
> 
> Script para crear proyectos de Vite React con Screaming Architecture automáticamente.

[English](#english) | [Español](#español)

---

## English

### 🚀 What is Screaming Architecture?

Screaming Architecture is an approach where your project structure immediately reveals what the application does. Instead of organizing by technical layers, you organize by features and business domains, making the codebase more maintainable and intuitive.

### ✨ Features

- 🎯 **Automatic Vite React project creation** with Screaming Architecture
- 📦 **Package manager detection** (npm, yarn, pnpm, bun)
- 🔧 **Multiple React variants support**:
  - React (JavaScript)
  - React (TypeScript)
  - React + SWC
  - React + SWC (TypeScript)
- 📁 **Pre-configured folder structure** following Screaming Architecture principles
- 📚 **Automatic documentation** generation

### 📦 Installation

```bash
# Recommended (works everywhere, no global installation needed)
npx screaming-dialca-react

# Global installation (choose your package manager)
npm install -g screaming-dialca-react
# OR
yarn global add screaming-dialca-react  
# OR
pnpm add -g screaming-dialca-react

# After global installation, run with:
screaming-dialca-react
```

### ⚠️ Important Notes

- **npx** is recommended as it always works without global installation
- If you install globally with one package manager (e.g., `npm`), use the same manager to run commands
- Global installations create a system-wide binary, so you can run `screaming-dialca-react` directly from anywhere

### 🏃‍♂️ Quick Start

1. Run the command:
   ```bash
   npx screaming-dialca-react
   ```

2. Follow the interactive prompts:
   - Enter your project name
   - Select a React variant

3. Navigate to your project and start developing:
   ```bash
   cd your-project-name
   npm install
   npm run dev
   ```

### 📁 Generated Structure

```
your-project/
├── src/
│   ├── app/           # Application-level components and configurations
│   ├── core/          # Application core (routing, theming, etc.)
│   ├── features/      # Feature-based modules
│   │   └── example/   # Example feature
│   │       ├── components/   # Feature-specific components
│   │       ├── hooks/        # Feature-specific hooks
│   │       ├── utils/        # Feature-specific utilities
│   │       ├── pages/        # Feature-specific pages
│   │       ├── constants/    # Feature-specific constants
│   │       ├── types/        # Feature-specific types (TypeScript)
│   │       ├── contexts/     # Feature-specific contexts
│   │       ├── stores/       # Feature-specific state management
│   │       └── services/     # Feature-specific services (API calls)
│   └── shared/        # Shared components, hooks, and utilities
└── README_SCREAMING.md  # Architecture documentation
```

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 👨‍💻 Author

Created by [Dialcadev](https://github.com/Diego17cp)

---

## Español

### 🚀 ¿Qué es la Screaming Architecture?

La Screaming Architecture es un enfoque donde la estructura de tu proyecto revela inmediatamente qué hace la aplicación. En lugar de organizar por capas técnicas, organizas por características y dominios de negocio, haciendo que el código sea más mantenible e intuitivo.

### ✨ Características

- 🎯 **Creación automática de proyectos Vite React** con Screaming Architecture
- 📦 **Detección del gestor de paquetes** (npm, yarn, pnpm, bun)
- 🔧 **Soporte para múltiples variantes de React**:
  - React (JavaScript)
  - React (TypeScript)
  - React + SWC
  - React + SWC (TypeScript)
- 📁 **Estructura de carpetas preconfigurada** siguiendo los principios de Screaming Architecture
- 📚 **Generación automática de documentación**

### 📦 Instalación

```bash
# Recomendado (funciona en todas partes, no se necesita instalación global)
npx screaming-dialca-react
# Instalación global (elige tu gestor de paquetes)
npm install -g screaming-dialca-react
# O
 yarn global add screaming-dialca-react  
# O
 pnpm add -g screaming-dialca-react
# Después de la instalación global, ejecuta con:
screaming-dialca-react
```
### ⚠️ Notas Importantes
- **npx** es recomendado ya que siempre funciona sin necesidad de instalación global
- Si instalas globalmente con un gestor de paquetes (por ejemplo, `npm`), usa el mismo gestor para ejecutar los comandos
- Las instalaciones globales crean un binario a nivel del sistema, por lo que puedes ejecutar `screaming-dialca-react` directamente desde cualquier lugar

### 🏃‍♂️ Inicio Rápido

1. Ejecuta el comando:
   ```bash
   npx screaming-dialca-react
   ```

2. Sigue las instrucciones interactivas:
   - Ingresa el nombre de tu proyecto
   - Selecciona una variante de React

3. Navega a tu proyecto y comienza a desarrollar:
   ```bash
   cd nombre-de-tu-proyecto
   npm install
   npm run dev
   ```

### 📁 Estructura Generada

```
tu-proyecto/
├── src/
│   ├── app/           # Componentes y configuraciones a nivel de aplicación
│   ├── core/          # Núcleo de la aplicación (enrutamiento, temas, etc.)
│   ├── features/      # Módulos basados en características
│   │   └── example/   # Característica de ejemplo
│   │       ├── components/   # Componentes específicos de la característica
│   │       ├── hooks/        # Hooks específicos de la característica
│   │       ├── utils/        # Utilidades específicas de la característica
│   │       ├── pages/        # Páginas específicas de la característica
│   │       ├── constants/    # Constantes específicas de la característica
│   │       ├── types/        # Tipos específicos de la característica (TypeScript)
│   │       ├── contexts/     # Contextos específicos de la característica
│   │       ├── stores/       # Gestión de estado específica de la característica
│   │       └── services/     # Servicios específicos de la característica (llamadas API)
│   └── shared/        # Componentes, hooks y utilidades compartidas
└── README_SCREAMING.md  # Documentación de la arquitectura
```

### 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, siéntete libre de enviar un Pull Request.

### 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

### 👨‍💻 Autor

Creado por [Dialcadev](https://github.com/Diego17cp)
