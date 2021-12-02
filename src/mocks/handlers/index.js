import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter(
        (student) => student.group === req.params.group
      );
      return res(
        ctx.status(200),
        ctx.json({
          students: matchingStudents,
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        students,
      })
    );
  }),
  rest.get('/student/:name', (req, res, ctx) => {
    if (req.params.name) {
      const matchingStudents = students.filter((student) => {
        return student.name.includes(req.params.name);
      });

      return res(
        ctx.status(200),
        ctx.json({
          matchingStudents,
        })
      );
    }
  }),
];
