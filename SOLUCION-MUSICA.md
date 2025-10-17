# 🚨 Solución al Error de Música

## El Problema
Google Drive **NO funciona** para streaming de audio en páginas web. Google bloquea el acceso directo para reproducción.

---

## ✅ Solución Rápida (Opción 1: Dropbox)

### Paso a Paso:

1. **Ve a Dropbox**: https://www.dropbox.com
   - Si no tienes cuenta, créala gratis

2. **Sube tu archivo MP3**:
   - Arrastra y suelta el archivo
   - O haz clic en "Subir archivos"

3. **Comparte el archivo**:
   - Haz clic derecho en el archivo
   - Selecciona "Compartir"
   - Haz clic en "Crear enlace"

4. **Copia y modifica el enlace**:
   - Copiarás algo como: `https://www.dropbox.com/scl/fi/abc123/cancion.mp3?rlkey=xyz&dl=0`
   - Cambia `dl=0` por `dl=1` al final
   - Resultado: `https://www.dropbox.com/scl/fi/abc123/cancion.mp3?rlkey=xyz&dl=1`

5. **Pega en tu proyecto**:
   - Abre `src/music-config.js`
   - Reemplaza la URL en la línea `songUrl:`

```javascript
export const MUSIC_CONFIG = {
  songUrl: 'TU_URL_DE_DROPBOX_AQUI',
  songTitle: 'Nuestra canción',
  autoplay: false,
  loop: false,
};
```

---

## ✅ Solución Alternativa (Opción 2: Vocaroo)

### Paso a Paso:

1. **Ve a Vocaroo**: https://vocaroo.com

2. **Sube tu MP3**:
   - Haz clic en "Upload"
   - Selecciona tu archivo MP3

3. **Obtén el enlace directo**:
   - Una vez subido, haz clic derecho en el botón de reproducción
   - Selecciona "Copiar dirección de audio" o "Copy audio address"
   - El enlace se verá así: `https://media1.vocaroo.com/mp3/abc123xyz.mp3`

4. **Pega en tu proyecto**:
   ```javascript
   songUrl: 'https://media1.vocaroo.com/mp3/abc123xyz.mp3',
   ```

---

## ✅ Solución Local (Opción 3: En tu proyecto)

Si vas a hospedar todo en tu servidor:

1. **Crea la carpeta**:
   ```
   memo-hari/
   └── public/
       └── music/
           └── cancion.mp3
   ```

2. **Coloca tu MP3**:
   - Arrastra tu archivo MP3 a la carpeta `public/music/`

3. **Actualiza la configuración**:
   ```javascript
   songUrl: '/music/cancion.mp3',
   ```

---

## 🎯 Ejemplo Completo Funcionando

```javascript
// src/music-config.js
export const MUSIC_CONFIG = {
  // Con Dropbox (recuerda cambiar dl=0 a dl=1)
  songUrl: 'https://www.dropbox.com/scl/fi/tu-id-aqui/Perfect.mp3?rlkey=xyz&dl=1',
  
  songTitle: 'Perfect - Ed Sheeran',
  autoplay: false,
  loop: false,
};
```

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué no funciona Google Drive?**  
R: Google Drive bloquea el streaming directo de audio para proteger los archivos. Solo permite descargas completas.

**P: ¿Cuál opción es mejor?**  
R: Dropbox es la más confiable. Vocaroo es más rápido pero los archivos expiran después de un tiempo.

**P: ¿Qué tamaño debe tener mi archivo?**  
R: Ideal menos de 10MB. Si es más grande, considera comprimirlo.

**P: ¿Qué formatos funcionan?**  
R: MP3 es el más compatible. También funciona M4A, OGG, WAV.

---

## 📞 Verificación

Después de cambiar la URL:

1. Guarda el archivo `src/music-config.js`
2. Recarga tu navegador (F5)
3. Haz clic en el botón de play
4. ¡Debería funcionar! 🎵

Si sigue sin funcionar, abre la consola del navegador (F12) y revisa los errores.

---

**¡Buena suerte con tu invitación de boda!** 💕


