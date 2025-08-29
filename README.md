# Playwright Tests

Este proyecto contiene pruebas automatizadas usando [Playwright](https://playwright.dev/) para diferentes flujos de trabajo web.

## Estructura del proyecto

- `tests/`: Pruebas principales organizadas por funcionalidad.
  - `AutomatiostorePage/`: Pruebas para https://automationteststore.com/
    - `login.spec.ts`: Prueba de login.
    - `email-already-registered.spec.ts`: Prueba de registro con email ya registrado.
  - `example.spec.ts`: Ejemplo de pruebas sobre Playwright.
- `tests-examples/`: Ejemplos adicionales de pruebas.
  - `demo-todo-app.spec.ts`: Pruebas sobre la demo TodoMVC.
- `playwright.config.ts`: Configuración de Playwright.
- `.github/workflows/playwright.yml`: Integración continua con GitHub Actions.
- `playwright-report/`: Reportes HTML generados por Playwright.
- `test-results/`: Resultados de ejecución de pruebas.
- `.gitignore`: Archivos y carpetas ignorados por git.
- `package.json`: Dependencias y metadatos del proyecto.

## Instalación

1. Clona el repositorio:
   ```sh
   git clone <url-del-repositorio>
   cd Playwright_tests
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Instala los navegadores de Playwright:
   ```sh
   npx playwright install --with-deps
   ```

## Ejecución de pruebas

Para ejecutar todas las pruebas:
```sh
npx playwright test
```

Para ejecutar una prueba específica:
```sh
npx playwright test tests/AutomatiostorePage/login.spec.ts
```

Los reportes HTML se generan en la carpeta `playwright-report/`.

## Integración continua

Las pruebas se ejecutan automáticamente en GitHub Actions usando el flujo definido en [.github/workflows/playwright.yml](.github/workflows/playwright.yml).

## Recursos

- [Documentación oficial de Playwright](https://playwright.dev/docs/intro)
- [Configuración de Playwright](playwright.config.ts)

---

**Autor:**  
Este proyecto fue generado para pruebas automatizadas de ejemplo.