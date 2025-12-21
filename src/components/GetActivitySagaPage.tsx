import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { Box, Button, Card, Typography } from "@mui/material";
import { fetchTasks } from "../store/reducers/ActivitySlice";

const GetActivitySagaPage = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { data, loading, error } = useSelector(
        (state: RootState) => state.activityReducer
    );

    return (
        <Card>
            <Typography variant="h4" gutterBottom>
                Получить новую активность с Saga
            </Typography>

            <Button 
            variant="contained" 
            onClick={() => dispatch(fetchTasks())} 
            disabled={loading}>
                Получить активность       
            </Button>

            {loading && <Typography>Загрузка</Typography>}
            {error && <Typography color="error">{error}</Typography>}

            <Box mt={2}>
                {data.slice(0, 5).map((post) => (
                    <Box key={post.id} mb={2}>
                        <Typography variant="subtitle1">
                            {post.title}
                        </Typography>
                        <Typography variant="body2">
                            {post.body}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Card>
    )
}

export default GetActivitySagaPage;