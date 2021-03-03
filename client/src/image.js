
import API from './utils/apiHelper';


const { Pixo } = window;
// const history = useHistory();

// export const PixoImage = ({ src, onChange, input }) => {
  export const pixo = new Pixo.Bridge({
    type: 'modal',
    apikey: '36eibah088i0', // put your API key here!
    onSave: img => {
      API.saveMeme([{image: img.toDataURL()}]).then(() => window.location.href = './Saved').catch(err => console.log(err))
      // console.log(img.toDataURL());
    },
    onClose: () => window.location.href = './edit',
    theme: 'light',
    propertypanel: {
      collapsible: true,
      collapsed: true
    },
  });
  // pixo.attachToFileInput(input);
//   return <img src={src} alt="potentially dank meme" onClick={() => pixo.edit(src)} className='editPreview'/>;
// }

