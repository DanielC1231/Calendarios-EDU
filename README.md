<img width="1440" height="2596" alt="1000050230" src="https://github.com/user-attachments/assets/9a3cd8fd-a13a-40fc-bcb2-69342fe52550" />
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

📊 Estructura del Google Sheets

**Orden de las columnas (obligatorio):**

| A | B | C | D | E |
|---|---|---|---|---|
| **semestre** | **grupo** | **titulo** | **fecha** | **imagen** |

**Ejemplo de datos:**

| semestre | grupo | titulo | fecha | imagen |
|----------|-------|--------|-------|--------|
| 1 | 1° A | Horario 1er Semestre Grupo A | 2026-08-15 | https://danielc1231.github.io/Calendarios-EDU/imagenes/calendario1a.jpg |
| 2 | 2° B | Horario 2do Semestre Grupo B | 2026-09-10 | https://danielc1231.github.io/Calendarios-EDU/imagenes/calendario2b.jpg |
| 3 | 3° C | Horario 3er Semestre Grupo C | 2026-10-01 | https://danielc1231.github.io/Calendarios-EDU/imagenes/calendario3c.jpg |
| 4 | 4° D | Horario 4to Semestre Grupo D | 2026-11-15 | https://danielc1231.github.io/Calendarios-EDU/imagenes/calendario4d.jpg |
| 5 | 5° E | Horario 5to Semestre Grupo E | 2026-12-01 | https://danielc1231.github.io/Calendarios-EDU/imagenes/calendario5e.jpg |
| 6 | 6° F | Horario 6to Semestre Grupo F | 2026-12-15 | https://danielc1231.github.io/Calendarios-EDU/imagenes/calendario6f.jpg |

**Además, en las celdas B35 y B36 se coloca la configuración:**

| Celda | Contenido | Ejemplo |
|-------|-----------|---------|
| **B35** | Semestres a mostrar | `1,3,5` o `2,4,6` o `1` |
| **B36** | Título del periodo | `Agosto - Diciembre 2026` |

🖼️ Cómo subir imágenes a GitHub Pages

Las imágenes deben subirse a la carpeta `imagenes` del repositorio:

1. Ve a tu repositorio `https://github.com/danielc1231/Calendarios-EDU`
2. Crea una carpeta llamada `imagenes` (si no existe)
3. Sube allí las imágenes de los calendarios
4. La URL será: `https://danielc1231.github.io/Calendarios-EDU/imagenes/NOMBRE_DEL_ARCHIVO`

**Ejemplo de nombres de archivo sugeridos:**
- `calendario1.jpg` (para 1er semestre)
- `calendario2.jpg` (para 2do semestre)
- `calendario3.jpg` (para 3er semestre)
- etc.

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

---
## 📹 Videotutoriales

[▶️ Haz clic aquí para ver el videotutorial 1](https://drive.google.com/file/d/1zrrO2UJd_TYOLA3Gl985Q9yY6gEk0FoL/view?usp=sharing)

En este video se explica cómo subir imagenes en github, en google sheets poner el link correcto en la parte imagenes.
[▶️ Haz clic aquí para ver el videotutorial 2](https://drive.google.com/file/d/1yHaFRZaiI7IBMI-5Jys2u4HcYDnGkba_/view?usp=sharing)
En este video se explica cómo controlar los semestres que aparecen en la página usando las celdas B35 y B36 del Google Sheets.

## 👨‍💻 CONOCE A LOS AUTORES

**🧑‍💻 Daniel C.** - Desarrollador 
- Apasionado por la tecnología 
- Le gusta: 📱 Apps, ⚡ Optimización
- Hobbies: Jugar videojuegos, tecnología, fútbol
- Dato curioso: Puede pasar horas programando hasta que salga de forma correcta
- [GitHub](https://github.com/DanielC1231)

**🧑‍💻 Martin I.** - Desarrollador 
- Le gusta resolver problemas
- Le gusta: 🗄️ Bases de datos,  🎨 Diseño visual
- Hobbies: Jugar videojuegos, ver películas y series
- Dato curioso: Se emociona cuando las cosas salen como la habíamos visualizado
- [GitHub](https://github.com/rodriguezmartin-dotcom)

> *"Creamos esta app para que los horarios sean fáciles de consultar desde el celular"*

| Daniel C. | Martin I. |
|-----------|-----------|
| "Si algo funciona no lo toques... pero siempre se puede mejorar" | "Al final todo estará bien, y si no está bien, no hemos llegado al final" |

Proyecto educativo colaborativo - 2026
