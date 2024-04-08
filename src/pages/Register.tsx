import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";

interface dataType {
  name: string;
  email: string;
  password: string;
}
interface dataArrayType extends dataType {
  id: Number;
}
interface initalState {
  data: dataType;
  dataArray: dataArrayType[];
}

class Register extends React.Component<{}, initalState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {
        name: "",
        email: "",
        password: "",
      },
      dataArray: [],
    };
  }

  handleChange = (event: any) => {
    const { data } = this.state;
    const label = event.target.name;
    this.setState({ data: { ...data, [label]: event.target.value } });
  };

  handleSubmit = (event: any) => {
    const { data, dataArray } = this.state;
    const newData = {
      ...data,
      id: dataArray.length,
    };
    this.setState({
      dataArray: [...dataArray, newData],
      data: {
        name: "",
        email: "",
        password: "",
      },
    });
  };

  render(): React.ReactNode {
    return (
      <Grid
        container
        direction="column"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          gap: 20,
        }}
      >
        <Grid item>
          <Typography variant="h4">Register Form</Typography>
        </Grid>
        <Grid item>
          <TextField
            type="text"
            variant="outlined"
            label="name"
            name="name"
            placeholder="Enter your name"
            value={this.state.data.name}
            onChange={this.handleChange}
            fullWidth
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            placeholder="Enter your Email id"
            value={this.state.data.email}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            type="password"
            variant="outlined"
            label="password"
            name="password"
            placeholder="Enter password"
            value={this.state.data.password}
            onChange={this.handleChange}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={this.handleSubmit}
            style={{ backgroundColor: "orange" }}
          >
            Submit
          </Button>
        </Grid>
        <Grid item container>
          {this.state.dataArray.length > 0 &&
            this.state.dataArray.map((data) => (
              <Grid item>
                <Typography>name: {data.name}</Typography>
                <Typography>Email: {data.email}</Typography>
              </Grid>
            ))}
        </Grid>
      </Grid>
    );
  }
}

export default Register;
