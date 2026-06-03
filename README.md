📅 Horarios JPII

Aplicación web progresiva (PWA) para consultar calendarios escolares de la Comunidad Educativa Juan Pablo II, organizados por semestre y grupo.

🚀 Características

- 📱 Instalable en Android e iOS como app nativa
- 📊 Filtros por semestre (1° al 6°)
- 🖼️ Visualización de imágenes de calendarios
- 💾 Funciona offline con caché local
- 🎛️ **Control flexible desde Google Sheets:**
  - La **celda B35** controla qué semestres se muestran
  - La **celda B36** controla el título del periodo
  - ¡La profesora puede cambiar la configuración sin tocar código!
- 🔍 Vista ampliada de imágenes: Toca cualquier horario para verlo en pantalla completa

🎮 Cómo controlar los semestres (para la profesora)

En el Google Sheets, solo necesita modificar **dos celdas**:

| Celda | Qué escribir | Resultado |
|-------|--------------|-----------|
| **B35** | `1` | Solo se ve 1er Semestre |
| **B35** | `2,4,6` | Solo se ven 2°, 4° y 6° Semestre |
| **B35** | `1,3,5` | Solo se ven 1°, 3° y 5° Semestre |
| **B35** | `todos` o vacío | Se ven todos los semestres |
| **B36** | `Enero - Julio` | Ese título aparece en la parte superior |
| **B36** | `Agosto - Diciembre` | Ese título aparece en la parte superior |

**Ejemplos prácticos:**

- Para el periodo **Agosto - Diciembre** → escribe `1,3,5` en B35
- Para el periodo **Enero - Julio** → escribe `2,4,6` en B35
- Para mostrar **solo un semestre** → escribe el número (ej: `5`)
- Para mostrar **todos** → deja B35 vacío o escribe `todos`

🛠️ Tecnologías

- GitHub Pages (Hosting gratuito)
- Google Sheets (Base de datos)
- Google Apps Script (API para leer datos)
- Service Workers (Funcionamiento offline)

📲 Instalación

**En Android (Chrome):**

1. Abre la web en tu navegador Google Chrome.
2. Toca el icono de los tres puntos verticales en la esquina superior derecha.
3. Selecciona "Instalar aplicación" o "Agregar a la pantalla de inicio".
4. Confirma tocando en "Instalar" o "Agregar".

**En iOS / iPhone (Safari):**

1. Abre la web en tu navegador Safari.
2. Toca el botón de "Compartir" (el icono de un cuadrado con una flecha hacia arriba).
3. Desplázate hacia abajo y selecciona "Agregar a inicio".
4. Toca "Agregar" en la esquina superior derecha.

¡Listo! Funciona como app nativa.

🔗 Enlace

[https://danielc1231.github.io/Horario-EDU/](https://danielc1231.github.io/Horario-EDU/)

📊 Estructura del Google Sheets

| Columna A | Columna B | Columna C | Columna D | Columna E |
|-----------|-----------|-----------|-----------|-----------|
| **semestre** | **titulo** | **grupo** | **fecha** | **imagen** |
| 1 | Horario 1° A | 1° Semestre A | 2026-08-15 | https://danielc1231.github.io/Calendarios-EDU/imagenes/calendario6c.jpg |
| 2 | Horario 2° B | 2° Semestre B | 2026-09-10 | https://danielc1231.github.io/Calendarios-EDU/imagenes/calendario6c.jpg |
| 3 | Horario 3° C | 3° Semestre C | 2026-10-01 | https://danielc1231.github.io/Horario-EDU/imagenes/calendario6d.jpg |

**Además, en las celdas B35 y B36 se coloca la configuración.**

---

Proyecto educativo colaborativo - 2026
