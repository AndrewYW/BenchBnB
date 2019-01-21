export const signup = (user) => (
  $.post({
    url: '/api/users',
    data: {user},
  })
);

export const login = (user) => (
  $.post({
    url: '/api/session',
    data: {user},
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
  })
);

