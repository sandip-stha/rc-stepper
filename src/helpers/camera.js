export default async node => {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    node.src = window.URL.createObjectURL(stream);
    node.play();
    return stream;
  } else {
    alert('Upgrade your browser or use a moder one');
  }
};
