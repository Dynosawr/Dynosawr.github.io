const options = {
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  buttonColorDark: 'transparent',  // default: '#100f2c'
  buttonColorLight: 'transparent', // default: '#fff'
  saveInCookies: true, // default: true,
  labelDark: '{{ site.baseurl }}/img/dark.png', // default: ''
  labelLight:'{{ site.baseurl }}/img/light.png', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
