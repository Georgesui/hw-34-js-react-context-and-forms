import { useFormikContext } from "formik";
import {Button} from "@mui/material";

function SubmitButton () {
	const formikContext = useFormikContext();
	
	return(
		<Button type="submit" disabled={formikContext.isSubmitting || !formikContext.dirty || !formikContext.isValid}>Save</Button>
	)
}

export default SubmitButton