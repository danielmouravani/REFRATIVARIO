import { EventItem } from './types';

export const SCHEDULE_DATA: EventItem[] = [
  // SALA 1
  ...[25, 26].flatMap((d): EventItem[] => [
    { id: `s1-${d}-1`, type: 'Wet Lab', title: 'LASIK COM FS VISUMAX', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '16:30-18:30', speakers: ['Stela Maris Asato', 'Alexandre Esperidião', 'Dhiogo Corrêa', 'Arnaldo Roizenblatt'], location: 'SALA 1 (CHAMBORD I – TÉRREO)' },
    { id: `s1-${d}-2`, type: 'Wet Lab', title: 'LASIK COM FS VISUMAX', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '18:30-20:30', speakers: ['Stela Maris Asato', 'Alexandre Esperidião', 'Dhiogo Corrêa', 'Arnaldo Roizenblatt'], location: 'SALA 1 (CHAMBORD I – TÉRREO)' },
  ]),
  ...([
    { id: `s1-27-1`, type: 'Wet Lab', title: 'SMILE', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '16:30-18:30', speakers: ['Joyce Farat'], location: 'SALA 1 (CHAMBORD I – TÉRREO)' },
    { id: `s1-27-2`, type: 'Wet Lab', title: 'SMILE', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '18:30-20:30', speakers: ['Joyce Farat'], location: 'SALA 1 (CHAMBORD I – TÉRREO)' },
    { id: `s1-27-3`, type: 'Wet Lab', title: 'SMILE', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '20:30-22:30', speakers: ['Joyce Farat'], location: 'SALA 1 (CHAMBORD I – TÉRREO)' },
  ] as EventItem[]),

  // SALA 2
  ...[25, 26, 27, 28].flatMap((d): EventItem[] => [
    { id: `s2-${d}-1`, type: 'Wet Lab', title: 'LASIK COM FEMTO Z8', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 26 ? 'Qui' : d === 27 ? 'Sex' : 'Sáb', time: '16:30-18:30', speakers: ['Larissa Borges', 'Gustavo Gonçalves', 'Thais Shiota', 'Marcela Barros', 'Anderson Martins', 'Felipe Nicola', 'Arnaldo Roizenblatt', 'Ticiano Giobellina'], location: 'SALA 2 (CHAMBORD II – TÉRREO)' },
    { id: `s2-${d}-2`, type: 'Wet Lab', title: 'LASIK COM FEMTO Z8', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 26 ? 'Qui' : d === 27 ? 'Sex' : 'Sáb', time: '18:30-20:30', speakers: ['Larissa Borges', 'Gustavo Gonçalves', 'Thais Shiota', 'Marcela Barros', 'Anderson Martins', 'Felipe Nicola', 'Arnaldo Roizenblatt', 'Ticiano Giobellina'], location: 'SALA 2 (CHAMBORD II – TÉRREO)' },
    { id: `s2-${d}-3`, type: 'Wet Lab', title: 'LASIK COM FEMTO Z8', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 26 ? 'Qui' : d === 27 ? 'Sex' : 'Sáb', time: '20:30-22:30', speakers: ['Larissa Borges', 'Gustavo Gonçalves', 'Thais Shiota', 'Marcela Barros', 'Anderson Martins', 'Felipe Nicola', 'Arnaldo Roizenblatt', 'Ticiano Giobellina'], location: 'SALA 2 (CHAMBORD II – TÉRREO)' },
  ]),

  // SALA 3
  ...[25, 26, 27, 28].flatMap((d): EventItem[] => [
    { id: `s3-${d}-1`, type: 'Wet Lab', title: 'LASIK COM MK', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 26 ? 'Qui' : d === 27 ? 'Sex' : 'Sáb', time: '16:30-18:30', speakers: ['Ana Beatriz Seabra', 'Leonardo Ugulino', 'Paulo Crestani', 'Germana Mariz', 'Alberto Gomes', 'Filipe Guidotti', 'Harumi Burga'], location: 'SALA 3 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s3-${d}-2`, type: 'Wet Lab', title: 'LASIK COM MK', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 26 ? 'Qui' : d === 27 ? 'Sex' : 'Sáb', time: '18:30-20:30', speakers: ['Ana Beatriz Seabra', 'Leonardo Ugulino', 'Paulo Crestani', 'Germana Mariz', 'Alberto Gomes', 'Filipe Guidotti', 'Harumi Burga'], location: 'SALA 3 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s3-${d}-3`, type: 'Wet Lab', title: 'LASIK COM MK', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 26 ? 'Qui' : d === 27 ? 'Sex' : 'Sáb', time: '20:30-22:30', speakers: ['Ana Beatriz Seabra', 'Leonardo Ugulino', 'Paulo Crestani', 'Germana Mariz', 'Alberto Gomes', 'Filipe Guidotti', 'Harumi Burga'], location: 'SALA 3 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
  ]),

  // SALA 4
  ...[25, 26, 27, 28].flatMap((d): EventItem[] => [
    { id: `s4-${d}-1`, type: 'Wet Lab', title: 'PRK', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 26 ? 'Qui' : d === 27 ? 'Sex' : 'Sáb', time: '16:30-18:30', speakers: ['Paula Mourad', 'Ludmilla Berodia', 'Luis Fernando Chaves', 'André Chimello', 'Larissa Pegorin', 'Daiane Bergamin', 'Isadora Coelho', 'Tatiana Szareski', 'Priscila Keinert', 'Thais Shiota', 'Glauco Aquino'], location: 'SALA 4 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s4-${d}-2`, type: 'Wet Lab', title: 'PRK', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 26 ? 'Qui' : d === 27 ? 'Sex' : 'Sáb', time: '18:30-20:30', speakers: ['Paula Mourad', 'Ludmilla Berodia', 'Luis Fernando Chaves', 'André Chimello', 'Larissa Pegorin', 'Daiane Bergamin', 'Isadora Coelho', 'Tatiana Szareski', 'Priscila Keinert', 'Thais Shiota', 'Glauco Aquino'], location: 'SALA 4 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s4-${d}-3`, type: 'Wet Lab', title: 'PRK', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 26 ? 'Qui' : d === 27 ? 'Sex' : 'Sáb', time: '20:30-22:30', speakers: ['Paula Mourad', 'Ludmilla Berodia', 'Luis Fernando Chaves', 'André Chimello', 'Larissa Pegorin', 'Daiane Bergamin', 'Isadora Coelho', 'Tatiana Szareski', 'Priscila Keinert', 'Thais Shiota', 'Glauco Aquino'], location: 'SALA 4 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
  ]),

  // SALA 5
  ...[25, 27, 28].flatMap((d): EventItem[] => [
    { id: `s5-${d}-1`, type: 'Wet Lab', title: 'IMPLANTE DE ANEL (PRÁTICO) KERARING', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 27 ? 'Sex' : 'Sáb', time: '16:30-18:30', speakers: ['Jady Foganholo', 'Rafael Freitas', 'André Chimello', 'Celso Pertile', 'Guilherme Zanini', 'Luiz Bernardi', 'Nelson Sena'], location: 'SALA 5 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s5-${d}-2`, type: 'Wet Lab', title: 'IMPLANTE DE ANEL (PRÁTICO) KERARING', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 27 ? 'Sex' : 'Sáb', time: '18:30-20:30', speakers: ['Jady Foganholo', 'Rafael Freitas', 'André Chimello', 'Celso Pertile', 'Guilherme Zanini', 'Luiz Bernardi', 'Nelson Sena'], location: 'SALA 5 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s5-${d}-3`, type: 'Wet Lab', title: 'IMPLANTE DE ANEL (PRÁTICO) KERARING', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : d === 27 ? 'Sex' : 'Sáb', time: '20:30-22:30', speakers: ['Jady Foganholo', 'Rafael Freitas', 'André Chimello', 'Celso Pertile', 'Guilherme Zanini', 'Luiz Bernardi', 'Nelson Sena'], location: 'SALA 5 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
  ]),
  ...([
    { id: `s5-26-1`, type: 'Wet Lab', title: 'PUPILOPLASTIA', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '16:30-18:30', speakers: ['Rafael Garcia', 'Fernando Sato', 'Lucas Teles', 'Glauco Aquino'], location: 'SALA 5 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s5-26-2`, type: 'Wet Lab', title: 'PUPILOPLASTIA', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '18:30-20:30', speakers: ['Rafael Garcia', 'Fernando Sato', 'Lucas Teles', 'Glauco Aquino'], location: 'SALA 5 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s5-26-3`, type: 'Wet Lab', title: 'PUPILOPLASTIA', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '20:30-22:30', speakers: ['Rafael Garcia', 'Fernando Sato', 'Lucas Teles', 'Glauco Aquino'], location: 'SALA 5 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
  ] as EventItem[]),

  // SALA 6
  ...[25, 26].flatMap((d): EventItem[] => [
    { id: `s6-${d}-1`, type: 'Wet Lab', title: 'PTERÍGIO COM COLA', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '16:30-18:30', speakers: ['Izabela Aburachid', 'Germana Mariz', 'Raysa Cechim', 'Andressa Magalhães'], location: 'SALA 6 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s6-${d}-2`, type: 'Wet Lab', title: 'PTERÍGIO COM COLA', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '18:30-20:30', speakers: ['Izabela Aburachid', 'Germana Mariz', 'Raysa Cechim', 'Andressa Magalhães'], location: 'SALA 6 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s6-${d}-3`, type: 'Wet Lab', title: 'PTERÍGIO COM COLA', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '20:30-22:30', speakers: ['Izabela Aburachid', 'Germana Mariz', 'Raysa Cechim', 'Andressa Magalhães'], location: 'SALA 6 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
  ]),
  ...[27, 28].flatMap((d): EventItem[] => [
    { id: `s6-${d}-1`, type: 'Wet Lab', title: 'CXL - CROSSLINKING', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 27 ? 'Sex' : 'Sáb', time: '16:30-18:30', speakers: ['Lívia Adnet', 'Crislaine Serpe', 'Fabio Kenji'], location: 'SALA 6 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s6-${d}-2`, type: 'Wet Lab', title: 'CXL - CROSSLINKING', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 27 ? 'Sex' : 'Sáb', time: '18:30-20:30', speakers: ['Lívia Adnet', 'Crislaine Serpe', 'Fabio Kenji'], location: 'SALA 6 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s6-${d}-3`, type: 'Wet Lab', title: 'CXL - CROSSLINKING', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 27 ? 'Sex' : 'Sáb', time: '20:30-22:30', speakers: ['Lívia Adnet', 'Crislaine Serpe', 'Fabio Kenji'], location: 'SALA 6 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
  ]),

  // SALA 7
  ...[25, 26].flatMap((d): EventItem[] => [
    { id: `s7-${d}-1`, type: 'Wet Lab', title: 'CAIRS', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '16:30-18:30', speakers: ['Bianca Susanna', 'Jady Foganholo', 'Rafael Freitas'], location: 'SALA 7 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s7-${d}-2`, type: 'Wet Lab', title: 'CAIRS', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '18:30-20:30', speakers: ['Bianca Susanna', 'Jady Foganholo', 'Rafael Freitas'], location: 'SALA 7 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
  ]),
  ...([
    { id: `s7-27-1`, type: 'Wet Lab', title: 'MIGS - TRABEX', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '16:30-18:30', speakers: ['Victor Cvintal', 'Pedro Boni', 'Luiz Beniz', 'Sarah Mariz'], location: 'SALA 7 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s7-27-2`, type: 'Wet Lab', title: 'MIGS - TRABEX', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '18:30-20:30', speakers: ['Victor Cvintal', 'Pedro Boni', 'Luiz Beniz', 'Sarah Mariz'], location: 'SALA 7 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s7-27-3`, type: 'Wet Lab', title: 'MIGS - TRABEX', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '20:30-22:30', speakers: ['Victor Cvintal', 'Pedro Boni', 'Luiz Beniz', 'Sarah Mariz'], location: 'SALA 7 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s7-28-1`, type: 'Wet Lab', title: 'MIGS - TANITO', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '16:30-18:30', speakers: ['Victor Cvintal', 'Pedro Boni', 'Luiz Beniz', 'Sarah Mariz'], location: 'SALA 7 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s7-28-2`, type: 'Wet Lab', title: 'MIGS - TANITO', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '18:30-20:30', speakers: ['Victor Cvintal', 'Pedro Boni', 'Luiz Beniz', 'Sarah Mariz'], location: 'SALA 7 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s7-28-3`, type: 'Wet Lab', title: 'MIGS - TANITO', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '20:30-22:30', speakers: ['Victor Cvintal', 'Pedro Boni', 'Luiz Beniz', 'Sarah Mariz'], location: 'SALA 7 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
  ] as EventItem[]),

  // SALA 8
  ...[25, 28].flatMap((d): EventItem[] => [
    { id: `s8-${d}-1`, type: 'Wet Lab', title: 'DMEK', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Sáb', time: '16:30-18:30', speakers: ['Gustavo Bonfadini', 'Nathalie Vargas', 'Rodrigo Pavanelli', 'Camilla Crema', 'Arthur Gribel', 'Andressa Magalhães'], location: 'SALA 8 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s8-${d}-2`, type: 'Wet Lab', title: 'DMEK', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Sáb', time: '18:30-20:30', speakers: ['Gustavo Bonfadini', 'Nathalie Vargas', 'Rodrigo Pavanelli', 'Camilla Crema', 'Arthur Gribel', 'Andressa Magalhães'], location: 'SALA 8 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s8-${d}-3`, type: 'Wet Lab', title: 'DMEK', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Sáb', time: '20:30-22:30', speakers: ['Gustavo Bonfadini', 'Nathalie Vargas', 'Rodrigo Pavanelli', 'Camilla Crema', 'Arthur Gribel', 'Andressa Magalhães'], location: 'SALA 8 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
  ]),
  ...[26, 27].flatMap((d): EventItem[] => [
    { id: `s8-${d}-1`, type: 'Wet Lab', title: 'CERATOPIGMENTAÇÃO TERAPÊUTICA', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 26 ? 'Qui' : 'Sex', time: '16:30-18:30', speakers: ['Alexandre X Da Costa', 'Giovanni Garotti', 'Cristiano Becker', 'Manuela Tenorio Cardoso'], location: 'SALA 8 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s8-${d}-2`, type: 'Wet Lab', title: 'CERATOPIGMENTAÇÃO TERAPÊUTICA', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 26 ? 'Qui' : 'Sex', time: '18:30-20:30', speakers: ['Alexandre X Da Costa', 'Giovanni Garotti', 'Cristiano Becker', 'Manuela Tenorio Cardoso'], location: 'SALA 8 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
    { id: `s8-${d}-3`, type: 'Wet Lab', title: 'CERATOPIGMENTAÇÃO TERAPÊUTICA', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 26 ? 'Qui' : 'Sex', time: '20:30-22:30', speakers: ['Alexandre X Da Costa', 'Giovanni Garotti', 'Cristiano Becker', 'Manuela Tenorio Cardoso'], location: 'SALA 8 (ALHAMBRA I-II – 2º ANDAR | 2º PISO)' },
  ]),

  // SALA 9
  ...[25, 26].flatMap((d): EventItem[] => [
    { id: `s9-${d}-1`, type: 'Wet Lab', title: 'ICL LENTE FÁCICA POSTERIOR', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '16:30-18:30', speakers: ['Daniel Matushita', 'Carlos Gordillo'], location: 'SALA 09 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s9-${d}-2`, type: 'Wet Lab', title: 'ICL LENTE FÁCICA POSTERIOR', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '18:30-20:30', speakers: ['Daniel Matushita', 'Carlos Gordillo'], location: 'SALA 09 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s9-${d}-3`, type: 'Wet Lab', title: 'ICL LENTE FÁCICA POSTERIOR', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '20:30-22:30', speakers: ['Daniel Matushita', 'Carlos Gordillo'], location: 'SALA 09 (EL PARDO II – 2º ANDAR | 2º PISO)' },
  ]),
  ...[27, 28].flatMap((d): EventItem[] => [
    { id: `s9-${d}-1`, type: 'Wet Lab', title: 'EYECRYL LENTE FÁCICA POSTERIOR', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 27 ? 'Sex' : 'Sáb', time: '16:30-18:30', speakers: ['Ana Horita', 'Robson Torres'], location: 'SALA 09 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s9-${d}-2`, type: 'Wet Lab', title: 'EYECRYL LENTE FÁCICA POSTERIOR', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 27 ? 'Sex' : 'Sáb', time: '18:30-20:30', speakers: ['Ana Horita', 'Robson Torres'], location: 'SALA 09 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s9-${d}-3`, type: 'Wet Lab', title: 'EYECRYL LENTE FÁCICA POSTERIOR', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 27 ? 'Sex' : 'Sáb', time: '20:30-22:30', speakers: ['Ana Horita', 'Robson Torres'], location: 'SALA 09 (EL PARDO II – 2º ANDAR | 2º PISO)' },
  ]),

  // SALA 10
  ...[25, 27].flatMap((d): EventItem[] => [
    { id: `s10-${d}-1`, type: 'Wet Lab', title: 'VITRECTOMIA ANTERIOR', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Sex', time: '16:30-18:30', speakers: ['Anderson Teixeira', 'Luis Filipe Diniz', 'Rafael Teixeira Pinto', 'João Ormonde', 'Carolina Hilgert', 'Carolina Martines'], location: 'SALA 10 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s10-${d}-2`, type: 'Wet Lab', title: 'VITRECTOMIA ANTERIOR', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Sex', time: '18:30-20:30', speakers: ['Anderson Teixeira', 'Luis Filipe Diniz', 'Rafael Teixeira Pinto', 'João Ormonde', 'Carolina Hilgert', 'Carolina Martines'], location: 'SALA 10 (EL PARDO II – 2º ANDAR | 2º PISO)' },
  ]),
  ...[26, 28].flatMap((d): EventItem[] => [
    { id: `s10-${d}-1`, type: 'Wet Lab', title: 'FIXAÇÃO ESCLERAL', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 26 ? 'Qui' : 'Sáb', time: '16:30-18:30', speakers: ['Rômulo Leite', 'Henrique Possebom', 'Guilherme Niciunovas', 'Hugo Possimoser', 'Rafael Morandi', 'Lucas Teles', 'Rafael Garcia'], location: 'SALA 10 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s10-${d}-2`, type: 'Wet Lab', title: 'FIXAÇÃO ESCLERAL', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 26 ? 'Qui' : 'Sáb', time: '18:30-20:30', speakers: ['Rômulo Leite', 'Henrique Possebom', 'Guilherme Niciunovas', 'Hugo Possimoser', 'Rafael Morandi', 'Lucas Teles', 'Rafael Garcia'], location: 'SALA 10 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s10-${d}-3`, type: 'Wet Lab', title: 'FIXAÇÃO ESCLERAL', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 26 ? 'Qui' : 'Sáb', time: '20:30-22:30', speakers: ['Rômulo Leite', 'Henrique Possebom', 'Guilherme Niciunovas', 'Hugo Possimoser', 'Rafael Morandi', 'Lucas Teles', 'Rafael Garcia'], location: 'SALA 10 (EL PARDO II – 2º ANDAR | 2º PISO)' },
  ]),

  // SALA 11
  ...[25, 26].flatMap((d): EventItem[] => [
    { id: `s11-${d}-1`, type: 'Wet Lab', title: 'INTRALENS - LENTE FÁCICA POSTERIOR (MEDIPHACOS)', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '16:30-18:30', speakers: ['Fábio Medina', 'Ramon Fazzolo'], location: 'SALA 11 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s11-${d}-2`, type: 'Wet Lab', title: 'INTRALENS - LENTE FÁCICA POSTERIOR (MEDIPHACOS)', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '18:30-20:30', speakers: ['Fábio Medina', 'Ramon Fazzolo'], location: 'SALA 11 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s11-${d}-3`, type: 'Wet Lab', title: 'INTRALENS - LENTE FÁCICA POSTERIOR (MEDIPHACOS)', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 25 ? 'Qua' : 'Qui', time: '20:30-22:30', speakers: ['Fábio Medina', 'Ramon Fazzolo'], location: 'SALA 11 (EL PARDO II – 2º ANDAR | 2º PISO)' },
  ]),
  ...[27, 28].flatMap((d): EventItem[] => [
    { id: `s11-${d}-1`, type: 'Wet Lab', title: 'LENTE FÁCICA ANTERIOR ARTISAN ARTIFLEX', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 27 ? 'Sex' : 'Sáb', time: '16:30-18:30', speakers: ['Pedro Bertino', 'Márcio Siqueira'], location: 'SALA 11 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s11-${d}-2`, type: 'Wet Lab', title: 'LENTE FÁCICA ANTERIOR ARTISAN ARTIFLEX', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 27 ? 'Sex' : 'Sáb', time: '18:30-20:30', speakers: ['Pedro Bertino', 'Márcio Siqueira'], location: 'SALA 11 (EL PARDO II – 2º ANDAR | 2º PISO)' },
    { id: `s11-${d}-3`, type: 'Wet Lab', title: 'LENTE FÁCICA ANTERIOR ARTISAN ARTIFLEX', date: `2026-03-${d}`, day: `${d}`, month: 'MAR', weekday: d === 27 ? 'Sex' : 'Sáb', time: '20:30-22:30', speakers: ['Pedro Bertino', 'Márcio Siqueira'], location: 'SALA 11 (EL PARDO II – 2º ANDAR | 2º PISO)' },
  ]),

  // SALA 12
  ...([
    { id: `s12-25-1`, type: 'Wet Lab', title: 'KERATOGRAPH E LUZ PULSADA THERMAEYE', date: '2026-03-25', day: '25', month: 'MAR', weekday: 'Qua', time: '16:30-18:30', speakers: ['Telma Justa', 'Ana Cristina Carvalho'], location: 'SALA 12 (ESCORIAL – 2º ANDAR | 2º PISO)' },
    { id: `s12-25-2`, type: 'Wet Lab', title: 'KERATOGRAPH E LUZ PULSADA THERMAEYE', date: '2026-03-25', day: '25', month: 'MAR', weekday: 'Qua', time: '18:30-20:30', speakers: ['Telma Justa', 'Ana Cristina Carvalho'], location: 'SALA 12 (ESCORIAL – 2º ANDAR | 2º PISO)' },
    { id: `s12-25-3`, type: 'Wet Lab', title: 'KERATOGRAPH E LUZ PULSADA THERMAEYE', date: '2026-03-25', day: '25', month: 'MAR', weekday: 'Qua', time: '20:30-22:30', speakers: ['Telma Justa', 'Ana Cristina Carvalho'], location: 'SALA 12 (ESCORIAL – 2º ANDAR | 2º PISO)' },
    { id: `s12-26-1`, type: 'Wet Lab', title: 'ANTERION', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '16:30-18:30', speakers: ['Carlos Arce'], location: 'SALA 12 (ESCORIAL – 2º ANDAR | 2º PISO)' },
    { id: `s12-26-2`, type: 'Wet Lab', title: 'MS39', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '18:30-20:30', speakers: ['Ruby Morales'], location: 'SALA 12 (ESCORIAL – 2º ANDAR | 2º PISO)' },
    { id: `s12-27-1`, type: 'Wet Lab', title: 'GALILEI', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '16:30-18:30', speakers: ['Carlos Arce'], location: 'SALA 12 (ESCORIAL – 2º ANDAR | 2º PISO)' },
    { id: `s12-27-2`, type: 'Wet Lab', title: 'GALILEI', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '18:30-20:30', speakers: ['Carlos Arce'], location: 'SALA 12 (ESCORIAL – 2º ANDAR | 2º PISO)' },
    { id: `s12-28-1`, type: 'Wet Lab', title: 'LIO PARA PRESBIOPIA - MULTIFOCAL E EDOF (BÁSICO)', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '16:30-18:30', speakers: ['Natália Amorim', 'Camilla Crema'], location: 'SALA 12 (ESCORIAL – 2º ANDAR | 2º PISO)' },
    { id: `s12-28-2`, type: 'Wet Lab', title: 'LIO PARA PRESBIOPIA - MULTIFOCAL E EDOF (AVANÇADO)', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '18:30-20:30', speakers: ['Natália Amorim', 'Camilla Crema'], location: 'SALA 12 (ESCORIAL – 2º ANDAR | 2º PISO)' },
  ] as EventItem[]),

  // SALA 13
  ...([
    { id: `s13-25-1`, type: 'Wet Lab', title: 'BIOMECÂNICA CORVIS', date: '2026-03-25', day: '25', month: 'MAR', weekday: 'Qua', time: '16:30-18:30', speakers: ['Nicole Larivoir'], location: 'SALA 13 (ALCAZAR - 2º ANDAR | 2º PISO)' },
    { id: `s13-25-2`, type: 'Wet Lab', title: 'BIOMECÂNICA CORVIS', date: '2026-03-25', day: '25', month: 'MAR', weekday: 'Qua', time: '18:30-20:30', speakers: ['Nicole Larivoir'], location: 'SALA 13 (ALCAZAR - 2º ANDAR | 2º PISO)' },
    { id: `s13-26-1`, type: 'Wet Lab', title: 'LENTE DE CONTATO ESCLERAL', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '16:30-18:30', speakers: ['Izabela Godinho', 'Stela Maris Asato', 'Rafael Oliveira'], location: 'SALA 13 (ALCAZAR - 2º ANDAR | 2º PISO)' },
    { id: `s13-26-2`, type: 'Wet Lab', title: 'LENTE DE CONTATO ESCLERAL', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '18:30-20:30', speakers: ['Izabela Godinho', 'Stela Maris Asato', 'Rafael Oliveira'], location: 'SALA 13 (ALCAZAR - 2º ANDAR | 2º PISO)' },
    { id: `s13-27-1`, type: 'Wet Lab', title: 'LIO TÓRICA (BÁSICO)', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '16:30-18:30', speakers: ['Murilo Bertazzo'], location: 'SALA 13 (ALCAZAR - 2º ANDAR | 2º PISO)' },
    { id: `s13-27-2`, type: 'Wet Lab', title: 'LIO TÓRICA (AVANÇADO)', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '18:30-20:30', speakers: ['Murilo Bertazzo'], location: 'SALA 13 (ALCAZAR - 2º ANDAR | 2º PISO)' },
    { id: `s13-28-1`, type: 'Wet Lab', title: 'ANEL PLANEJAMENTO FERRARA (BÁSICO)', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '16:30-18:30', speakers: ['Jordana Sandes'], location: 'SALA 13 (ALCAZAR - 2º ANDAR | 2º PISO)' },
    { id: `s13-28-2`, type: 'Wet Lab', title: 'ANEL PLANEJAMENTO FERRARA (AVANÇADO)', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '18:30-20:30', speakers: ['Jordana Sandes'], location: 'SALA 13 (ALCAZAR - 2º ANDAR | 2º PISO)' },
  ] as EventItem[]),

  // SALA 14
  ...([
    { id: `s14-25-1`, type: 'Wet Lab', title: 'ANEL PLANEJAMENTO KERARING (BÁSICO)', date: '2026-03-25', day: '25', month: 'MAR', weekday: 'Qua', time: '16:30-18:30', speakers: ['Nelson Sena', 'Henrique Possebom'], location: 'SALA 14 (ARANJUEZ – 2º ANDAR | 2º PISO)' },
    { id: `s14-25-2`, type: 'Wet Lab', title: 'ANEL PLANEJAMENTO KERARING (AVANÇADO)', date: '2026-03-25', day: '25', month: 'MAR', weekday: 'Qua', time: '18:30-20:30', speakers: ['Nelson Sena', 'Henrique Possebom'], location: 'SALA 14 (ARANJUEZ – 2º ANDAR | 2º PISO)' },
    { id: `s14-26-1`, type: 'Wet Lab', title: 'PENTACAM (BÁSICO)', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '16:30-18:30', speakers: ['Nicole Larivoir'], location: 'SALA 14 (ARANJUEZ – 2º ANDAR | 2º PISO)' },
    { id: `s14-26-2`, type: 'Wet Lab', title: 'PENTACAM (AVANÇADO)', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '18:30-20:30', speakers: ['Nicole Larivoir'], location: 'SALA 14 (ARANJUEZ – 2º ANDAR | 2º PISO)' },
    { id: `s14-27-1`, type: 'Wet Lab', title: 'OCT SA', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '16:30-18:30', speakers: ['Norma Allemann', 'Camile Tonin', 'Luiz Guilherme Ito'], location: 'SALA 14 (ARANJUEZ – 2º ANDAR | 2º PISO)' },
    { id: `s14-27-2`, type: 'Wet Lab', title: 'OCT SA', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '18:30-20:30', speakers: ['Norma Allemann', 'Camile Tonin', 'Luiz Guilherme Ito'], location: 'SALA 14 (ARANJUEZ – 2º ANDAR | 2º PISO)' },
    { id: `s14-28-1`, type: 'Wet Lab', title: 'BIOMETRIA (BÁSICO)', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '16:30-18:30', speakers: ['Felipe Taguchi', 'Rafael Arantes'], location: 'SALA 14 (ARANJUEZ – 2º ANDAR | 2º PISO)' },
    { id: `s14-28-2`, type: 'Wet Lab', title: 'BIOMETRIA (AVANÇADO)', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '18:30-20:30', speakers: ['Felipe Taguchi', 'Rafael Arantes'], location: 'SALA 14 (ARANJUEZ – 2º ANDAR | 2º PISO)' },
  ] as EventItem[]),

  // SALA 15
  ...([
    { id: `s15-25-1`, type: 'Wet Lab', title: 'OLHO SECO TEÓRICO', date: '2026-03-25', day: '25', month: 'MAR', weekday: 'Qua', time: '16:30-18:30', speakers: ['Diógenes Caldeira', 'Marília Trindade'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
    { id: `s15-25-2`, type: 'Wet Lab', title: 'OLHO SECO - IDRA', date: '2026-03-25', day: '25', month: 'MAR', weekday: 'Qua', time: '18:30-20:30', speakers: ['Diógenes Caldeira', 'Marília Trindade'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
    { id: `s15-25-3`, type: 'Wet Lab', title: 'OLHO SECO - IDRA', date: '2026-03-25', day: '25', month: 'MAR', weekday: 'Qua', time: '20:30-22:30', speakers: ['Diógenes Caldeira', 'Marília Trindade'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
    { id: `s15-26-1`, type: 'Wet Lab', title: 'EXCIMER LASER (ALCON) - BÁSICO', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '16:30-18:30', speakers: ['Glauco Mello'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
    { id: `s15-26-2`, type: 'Wet Lab', title: 'EXCIMER LASER (ALCON) - AVANÇADO', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '18:30-20:30', speakers: ['Glauco Mello'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
    { id: `s15-26-3`, type: 'Wet Lab', title: 'OPD SCAN', date: '2026-03-26', day: '26', month: 'MAR', weekday: 'Qui', time: '20:30-22:30', speakers: ['Marcos Pizzolatti', 'Ludmila Berodia'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
    { id: `s15-27-1`, type: 'Wet Lab', title: 'EXCIMER LASER (SCHWIND) - BÁSICO', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '16:30-18:30', speakers: ['Ramon Ghanem'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
    { id: `s15-27-2`, type: 'Wet Lab', title: 'EXCIMER LASER (SCHWIND) - AVANÇADO', date: '2026-03-27', day: '27', month: 'MAR', weekday: 'Sex', time: '18:30-20:30', speakers: ['Ramon Ghanem'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
    { id: `s15-28-1`, type: 'Wet Lab', title: 'EXCIMER LASER (ZEISS)', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '16:30-18:30', speakers: ['Márcia Toledo'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
    { id: `s15-28-2`, type: 'Wet Lab', title: 'EXCIMER LASER (VISX)', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '18:30-20:30', speakers: ['Luciano Haddad'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
    { id: `s15-28-3`, type: 'Wet Lab', title: 'EXCIMER LASER TENEO (BAUSCH)', date: '2026-03-28', day: '28', month: 'MAR', weekday: 'Sáb', time: '20:30-22:30', speakers: ['Fernando Marquez'], location: 'SALA 15 (ORIENTE - 2º ANDAR | 2º PISO)' },
  ] as EventItem[]),
];

export const DAYS = [
  { weekday: 'Qua', day: '25', month: 'MAR', date: '2026-03-25' },
  { weekday: 'Qui', day: '26', month: 'MAR', date: '2026-03-26' },
  { weekday: 'Sex', day: '27', month: 'MAR', date: '2026-03-27' },
  { weekday: 'Sáb', day: '28', month: 'MAR', date: '2026-03-28' },
];
