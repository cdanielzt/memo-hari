# 🎵 Guía para Cambiar la Música de tu Invitación

## 📝 Pasos Rápidos

1. Abre el archivo `src/music-config.js`
2. Cambia la URL en la línea que dice `songUrl:`
3. ¡Listo! La música se actualizará automáticamente

## 🎵 Cómo Conseguir la URL de tu Canción

### Opción 1: Google Drive (Recomendado)
1. Sube tu archivo MP3 a Google Drive
2. Haz clic derecho en el archivo → "Compartir"
3. Cambia el acceso a "Cualquiera con el enlace"
4. Copia el enlace (se verá así: `https://drive.google.com/file/d/ABC123XYZ/view`)
5. Toma el ID (la parte entre `/d/` y `/view`), por ejemplo: `ABC123XYZ`
6. Usa este formato en `music-config.js`:
```javascript
songUrl: 'https://drive.google.com/uc?export=download&id=ABC123XYZ'
```

### Opción 2: Dropbox
1. Sube tu archivo MP3 a Dropbox
2. Haz clic derecho → "Compartir" → "Crear enlace"
3. Copia el enlace generado
4. Cambia el final del enlace de `?dl=0` a `?dl=1`
5. Usa ese enlace en `music-config.js`:
```javascript
songUrl: 'https://www.dropbox.com/s/tu-enlace-aqui/cancion.mp3?dl=1'
```

### Opción 3: Servidor Propio
Si tienes tu propio hosting:
```javascript
songUrl: 'https://tu-sitio.com/musica/cancion.mp3'
```

## ⚙️ Configuraciones Disponibles

En el archivo `src/music-config.js` puedes cambiar:

```javascript
export const MUSIC_CONFIG = {
  // URL de tu canción
  songUrl: 'URL_DE_TU_CANCION_AQUI',
  
  // Título que aparecerá en el reproductor
  songTitle: 'Perfect - Ed Sheeran',
  
  // ¿Quieres que empiece automáticamente?
  // true = sí, false = no
  autoplay: false,
};
```

## 🎨 Características del Reproductor

✨ **Diseño elegante** - Se integra perfectamente con tu invitación
🎯 **Fijo en la esquina** - Siempre visible mientras navegas
📱 **Responsive** - Se adapta a móviles y tablets
🔊 **Control de volumen** - Botón para silenciar/activar
⏯️ **Play/Pause** - Control de reproducción
⏱️ **Barra de progreso** - Ve y controla el tiempo de la canción
🔄 **Loop automático** - La música se repite automáticamente

## 💡 Consejos

- **Formato recomendado**: MP3
- **Tamaño máximo**: Intenta que no pese más de 10MB
- **Duración**: 2-5 minutos es ideal
- **Autoplay**: Muchos navegadores bloquean el autoplay, es mejor dejarlo en `false`

## 🎼 Sugerencias de Canciones para Bodas

- "Perfect" - Ed Sheeran
- "A Thousand Years" - Christina Perri
- "All of Me" - John Legend
- "Marry You" - Bruno Mars
- "Thinking Out Loud" - Ed Sheeran
- "Can't Help Falling in Love" - Elvis Presley

## ❓ Problemas Comunes

**La música no suena:**
- Verifica que la URL sea correcta
- Asegúrate de que el enlace sea público
- Revisa la consola del navegador (F12) para ver errores

**El autoplay no funciona:**
- Es normal, los navegadores bloquean el autoplay automático
- Los visitantes tendrán que hacer clic en el botón de play

**La música se corta:**
- Verifica tu conexión a internet
- El archivo puede ser muy pesado
- Intenta con una versión más ligera del MP3

## 🆘 Necesitas Ayuda?

Si tienes problemas, revisa:
1. Que el archivo de música esté subido correctamente
2. Que el enlace sea público y directo al archivo
3. Que el formato sea MP3

---

¡Disfruta tu invitación con música! 💕🎵


