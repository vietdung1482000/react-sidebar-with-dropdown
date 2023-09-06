import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { Fragment, useRef } from "react";
import { Grid, Typography, Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Scheduler } from "@aldabil/react-scheduler";
import { SchedulerRef } from "@aldabil/react-scheduler/types";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Tech from '../../components/listTech/Tech';


type Props = {};
export const EVENTS = [
];

export const RESOURCES = [
  {
    admin_id: 1,
    title: "Phương",
    mobile: "0901234567",
    avatar: "https://i.pinimg.com/564x/cc/06/85/cc0685dd4ca2461e4738f1e16a061467.jpg",
    color: "#5f27cd"
  },
  {
    admin_id: 2,
    title: "Thu",
    mobile: "0912345678",
    avatar: "https://i.pinimg.com/236x/95/0c/c3/950cc318082bffd241248774e8f7b138.jpg",
    color: "#58ab2d"
  },
  {
    admin_id: 3,
    title: "Ly",
    mobile: "0987612345",
    avatar: "https://i.pinimg.com/236x/11/3b/84/113b8448d0517a2e9700754d4e945d6b.jpg",
    color: "#a001a2"
  },
  {
    admin_id: 4,
    title: "Nga",
    mobile: "0987612345",
    avatar: "https://i.pinimg.com/236x/04/ee/eb/04eeeb7b32f37ffef6a4600415d2a654.jpg",
    color: "#08c5bd"
  },
  {
    admin_id: 5,
    title: "Hằng",
    mobile: "0923456789",
    avatar: "https://i.pinimg.com/236x/58/dc/d3/58dcd3666a6db220fca2455d0cec5acd.jpg",
    color: "#a001a2"
  },
  {
    admin_id: 6,
    title: "Huệ",
    mobile: "0945362107",
    avatar: "https://i.pinimg.com/236x/65/93/bf/6593bfd62ecedfcb60c115ce391a2876.jpg",
    color: "#08c5bd"
  }
];
const itemData = [
  {
    img: 'https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-cuc-dep.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://www.ldg.com.vn/media/uploads/uploads/21213659-hinh-anh-gai-xinh-71.jpg',
    title: 'Burger',
  },
  {
    img: 'https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg',
    title: '232323',
  },
];

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const CalendarPage = (props: Props) => {
  const calendarRef = useRef<SchedulerRef>(null);
  return (
    <Fragment>
      <Grid container spacing={2} sx={{ display: 'flex' }}>
        <Grid item xs={9}>
          <Item>
            <Scheduler
              view="week"
              day={{
                startHour: 6,
                endHour: 24,
                step: 60,
                navigation: true
              }}
              week={{
                weekDays: [0, 1, 2, 3, 4, 5, 6],
                weekStartOn: 1,
                startHour: 6,
                endHour: 24,
                step: 60,
                navigation: true,
                disableGoToDay: false
              }}
              resourceViewMode="tabs"
              ref={calendarRef}
              events={EVENTS}
              resources={RESOURCES}
              translations={
                {
                  navigation: {
                    month: "Month",
                    week: "Week",
                    day: "Day",
                    today: "Today"
                  },
                  form: {
                    addTitle: "Thông tin dịch vụ",
                    editTitle: "Chỉnh sửa thông tin dịch vụ",
                    confirm: "Xác Nhận",
                    delete: "Hủy",
                    cancel: "Thoát"
                  },
                  event: {
                    title: "Nội dung dịch vụ",
                    start: "Bắt đầu",
                    end: "Kết thúc",
                    allDay: "All Day"
                  },
                  validation: {
                    required: "Required",
                    invalidEmail: "Invalid Email",
                    onlyNumbers: "Only Numbers Allowed",
                    min: "Minimum {{min}} letters",
                    max: "Maximum {{max}} letters"
                  },
                  moreEvents: "More...",
                  loading: "Loading..."
                }
              }
              stickyNavitation={true}
              resourceFields={{
                idField: "admin_id",
                textField: "title",
                subTextField: "mobile",
                avatarField: "title",
                colorField: "color"
              }}
              fields={[
                {
                  name: "admin_id",
                  type: "select",
                  default: RESOURCES[0].admin_id,
                  options: RESOURCES.map((res) => {
                    return {
                      id: res.admin_id,
                      text: `${res.title} (${res.mobile})`,
                      value: res.admin_id
                    };
                  }),
                  config: { label: "Assignee", required: true }
                }
              ]}
              //show modal
              viewerExtraComponent={(fields, event) => {
                return (
                  <div>
                    {fields.map((field, i) => {
                      if (field.name === "admin_id") {
                        return (
                          <Typography
                            key={i}
                            style={{ display: "flex", alignItems: "center", justifyContent: 'flex-end' }}
                            color="yellow"
                            variant="caption"
                            noWrap
                          >
                            <ImageList cols={3} sx={{ float: 'right' }}>
                              {itemData.map((item) => (
                                <ImageListItem key={item.img} >
                                  <img
                                    style={{ width: 30, height: 30, border: "1px solid red", borderRadius: "50px" }}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                  />
                                </ImageListItem>
                              ))}
                            </ImageList>
                          </Typography>
                        );
                      } else {
                        return "";
                      }
                    })}
                  </div>
                );
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </Item>

          <Item sx={{ marginTop: "1rem" }}>
            <Box sx={{ display: 'flex', marginLeft: '2rem' }}>
              <Typography sx={{ display: 'flex', alignItems: 'center', marginTop: "1rem" }}>Calendar</Typography>
              <Typography sx={{ width: '30px', height: '30px', background: 'yellow', marginLeft: "1rem", marginTop: "1rem", border: '1px solid black', borderRadius: '50%', padding: '3px' }}>3</Typography>
            </Box>
            <Box>
              <Tech listTech={RESOURCES} />
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CalendarPage;