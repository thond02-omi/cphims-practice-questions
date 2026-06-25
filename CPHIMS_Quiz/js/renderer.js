function renderCard(q) {
  var cl = q.cog.toLowerCase();
  var opts = q.opts.map(function(o) {
    return '<button class="opt" data-letter="' + o.l + '" data-correct="' + o.c + '" onclick="ans(this)">'
      + '<span class="ol">' + o.l + '</span>'
      + '<span class="ot">' + o.t + '</span>'
      + '</button>';
  }).join('');
  return '<div class="qcard" data-domain="' + q.domain + '" data-cog="' + q.cog + '" data-id="' + q.id + '" data-correct="' + q.correct + '" data-state="un">'
    + '<div class="qh">'
    + '<span class="qid">' + q.id + '</span>'
    + '<span class="cb ' + cl + '">' + q.cog + '</span>'
    + '<span class="mp">' + q.task + '</span>'
    + '</div>'
    + '<div class="stem">' + q.stem + '</div>'
    + '<div class="opts">' + opts + '</div>'
    + '<div class="rat hidden"><strong>Rationale:</strong> ' + q.rat + '</div>'
    + '</div>';
}
