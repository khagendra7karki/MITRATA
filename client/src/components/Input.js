import '../assets/css/input.css'

const Input = ({label, value, onChange, ...props }) => {
    return <>
        <div className = 'customInputWraper'>
            <label className = 'customInputLabel'>{label}</label>
            <input {...props} className = 'customInput' value = {value} onChange = {onChange} required/>

        </div>
    </>
}

export default Input