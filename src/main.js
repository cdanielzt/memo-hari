import './app.css'
import { MUSIC_CONFIG } from './music-config.js'

// Reproductor de Música
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('weddingMusic');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const playIcon = document.getElementById('playIcon');
  const pauseIcon = document.getElementById('pauseIcon');
  const progressBar = document.getElementById('progressBar');
  const timeDisplay = document.getElementById('timeDisplay');
  const volumeBtn = document.getElementById('volumeBtn');
  const songTitleEl = document.querySelector('.music-title');

  // Configurar la canción desde el archivo de configuración
  audio.src = MUSIC_CONFIG.songUrl;
  audio.loop = MUSIC_CONFIG.loop;
  if (songTitleEl) {
    songTitleEl.textContent = MUSIC_CONFIG.songTitle;
  }

  // Manejo de errores
  audio.addEventListener('error', (e) => {
    console.error('Error al cargar la música:', e);
    alert('⚠️ No se pudo cargar la música. Por favor verifica la URL en src/music-config.js\n\nGoogle Drive puede bloquear el streaming directo. Considera usar Dropbox o subir el archivo a tu servidor.');
  });

  let isPlaying = false;

  // Play/Pause
  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      audio.pause();
      playIcon.classList.remove('hidden');
      pauseIcon.classList.add('hidden');
    } else {
      audio.play();
      playIcon.classList.add('hidden');
      pauseIcon.classList.remove('hidden');
    }
    isPlaying = !isPlaying;
  });

  // Actualizar barra de progreso
  audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;
    
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  });

  // Cambiar posición de la canción
  progressBar.addEventListener('input', (e) => {
    const time = (e.target.value / 100) * audio.duration;
    audio.currentTime = time;
  });

  // Control de volumen
  let isMuted = false;
  volumeBtn.addEventListener('click', () => {
    audio.muted = !isMuted;
    isMuted = !isMuted;
    volumeBtn.style.opacity = isMuted ? '0.5' : '1';
  });

  // Auto-play si está configurado
  if (MUSIC_CONFIG.autoplay) {
    audio.play()
      .then(() => {
        isPlaying = true;
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
      })
      .catch(() => console.log('Autoplay bloqueado por el navegador. El usuario debe hacer clic para reproducir.'));
  }
});

// Funcionalidad para copiar número de cuenta
window.copyAccountNumber = function() {
  navigator.clipboard.writeText('4169161103562566').then(() => {
    // Mostrar mensaje de confirmación
    const button = event.target.closest('button');
    const originalText = button.innerHTML;
    button.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> ¡Copiado!';
    button.style.backgroundColor = '#4ade80';
    
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.backgroundColor = '';
    }, 2000);
  }).catch(err => {
    console.error('Error al copiar:', err);
    alert('Número de cuenta: 4169161103562566');
  });
};

// Cuenta Regresiva
document.addEventListener('DOMContentLoaded', () => {
  // Fecha del evento: 15 de diciembre de 2025 a las 5:00 PM
  const weddingDate = new Date('December 15, 2025 17:00:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
      // Si la fecha ya pasó, mostrar ceros
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      return;
    }

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualizar el DOM con formato de dos dígitos
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  // Actualizar inmediatamente y luego cada segundo
  updateCountdown();
  setInterval(updateCountdown, 1000);
});