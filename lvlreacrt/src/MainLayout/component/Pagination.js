import { Grid } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Container from '@material-ui/core/Container';

const Paginations = ({ onChange,total,limit }) => {
  return (
    <Container>
      <Grid Container xs={12}>
      <Grid item xs={12}>
       <Pagination onChange={( p) => onChange(p)} count={total/limit} />
   </Grid>
      </Grid>
    </Container>
  );
};
export default Paginations;