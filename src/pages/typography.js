/** @jsx jsx */
import { jsx } from "theme-ui"

const Text = ({ variant = "heading", ...props }) => (
  <p
    {...props}
    sx={{
      m: 0,
      variant: `text.${variant}`,
    }}
  />
)

export default Text
