const http = require('http');
const fs = require('fs');

// 1. Check HTTP response from localhost:8080
http.get('http://localhost:8080/bakery-intro.mp4', (res) => {
  console.log('HTTP Status:', res.statusCode);
  console.log('Content-Type:', res.headers['content-type']);
  console.log('Content-Length:', res.headers['content-length']);
  console.log('Accept-Ranges:', res.headers['accept-ranges']);
  res.destroy();
}).on('error', (err) => {
  console.error('HTTP Error:', err.message);
});

// 2. Check avcC box inside MP4
const buf = fs.readFileSync('public/bakery-intro.mp4');
const avcCIndex = buf.indexOf(Buffer.from('avcC'));
if (avcCIndex !== -1) {
  // avcC box: 4 bytes length, 4 bytes 'avcC', then 1 byte configurationVersion, 1 byte AVCProfileIndication, 1 byte profile_compatibility, 1 byte AVCLevelIndication
  const version = buf[avcCIndex + 4];
  const profile = buf[avcCIndex + 5];
  const compat = buf[avcCIndex + 6];
  const level = buf[avcCIndex + 7];
  console.log(`avcC: version=${version}, profile=${profile} (0x${profile.toString(16)}), compat=${compat}, level=${level} (${level/10})`);
  // Profile meanings: 66=Baseline, 77=Main, 100=High, 110=High 10, 122=High 4:2:2, 244=High 4:4:4
  if (profile === 100) console.log('Profile: High');
  else if (profile === 77) console.log('Profile: Main');
  else if (profile === 66) console.log('Profile: Baseline');
  else console.log('Profile unknown/special:', profile);
} else {
  console.log('No avcC box found!');
}
