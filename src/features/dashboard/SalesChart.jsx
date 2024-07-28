import styled from 'styled-components';
import DashboardBox from './DashboardBox';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Heading from '../../ui/Heading';
import { useDarkMode } from '../../context/DarkModeContext';
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;

export const SalesChart = ({ bookings = [], numDays }) => {
  const { isDarkMode } = useDarkMode();

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map((date) => {
    const totalSales = bookings
      .filter((booking) => isSameDay(date, new Date(booking.createdAt)))
      .reduce((acc, cur) => acc + cur.totalPrice, 0);

    const extraSales = bookings
      .filter((booking) => isSameDay(date, new Date(booking.createdAt)))
      .reduce((acc, cur) => acc + cur.extraPrice, 0);

    return {
      label: format(date, 'MMM dd'),
      totalSales,
      extraSales,
    };
  });

  //   console.log(data);
  const colors = isDarkMode
    ? {
        totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
        extraSales: { stroke: '#22c55e', fill: '#22c55e' },
        text: '#e5e7eb',
        background: '#18212f',
      }
    : {
        totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
        extraSales: { stroke: '#16a34a', fill: '#dcfce7' },
        text: '#374151',
        background: '#fff',
      };

  return (
    <StyledSalesChart>
      <Heading as="h2">
        Sales from {format(allDates[0], 'MMM dd yyyy')} &mdash;{' '}
        {format(allDates.at(-1), 'MMM dd yyyy')}
      </Heading>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis dataKey="label" />
          <YAxis unit="$" />
          <CartesianGrid strokeDasharray="8" />
          <Tooltip />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
          />
          <Area
            dataKey="extraSales"
            type="monotone"
            stroke={colors.extraSales.stroke}
            fill={colors.extraSales.fill}
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledSalesChart>
  );
};
