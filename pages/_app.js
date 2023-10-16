import style from '../styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="MyApp">
      <Component {...pageProps} />
    </div>
  )
}