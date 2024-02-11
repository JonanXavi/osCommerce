
# osCommerce - Test Automation

En este proyecto se automatizó los test cases proporcionados por el profesor **Xavier Escudero**, los cuales se encuentran detallados en el documento **E2E Test automation with Cypress**.


![Logo](https://cdn.qualityunit.com/app/uploads/2021/07/oscommerce.png)


## Tecnologías Utilizadas

- Node.js
- Cypress +13


## Instalación

Clonar el proyecto

```bash
  git clone https://github.com/JonanXavi/osCommerce.git
```

Ir al directorio del proyecto

```bash
  cd mi-proyecto
```

Instalar las dependecias

```bash
  npm install
```
## Ejecución de Tests

Para llevar a cabo los test en modo visual, se debe ejecutar el siguiente comando

```bash
  npm run cypress:open
```

Para llevar a cabo los test en modo headless, se debe ejecutar cualquiera de los siguientes comandos

> [!CAUTION]
> Se debe tener preinstalado los navegadores chrome y/o firefox para su respectiva ejecución

```bash
  npm run headless:chrome
  npm run headless:firefox
```

> [!IMPORTANT]
> La ejecución de tests en modo headless, permite la grabación de videos de los tests y capturas de pantalla en caso de hallarse errores


## Autor

- [@jonanxavi](https://www.github.com/jonanxavi)


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jonathan-fernandez-/)
