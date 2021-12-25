const addPosition = (data) => {
  return [...data]
    .sort((a, b) => b.points - a.points)
    .map((player, index) => {
      return {
        id: player.id,
        position: index + 1,
        name: player.name,
        points: player.points,
        color: player.color
      };
    });
};

export default addPosition;
