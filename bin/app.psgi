#!/usr/bin/env perl

use strict;
use warnings;
use FindBin;
use lib "$FindBin::Bin/../lib";


# use this block if you don't need middleware, and only have a single target Dancer app to run here
use DancerVue;

DancerVue->to_app;

use Plack::Builder;

builder {
    enable 'Deflater';
    DancerVue->to_app;
}



=begin comment
# use this block if you want to include middleware such as Plack::Middleware::Deflater

use DancerVue;
use Plack::Builder;

builder {
    enable 'Deflater';
    DancerVue->to_app;
}

=end comment

=cut

=begin comment
# use this block if you want to include middleware such as Plack::Middleware::Deflater

use DancerVue;
use DancerVue_admin;

builder {
    mount '/'      => DancerVue->to_app;
    mount '/admin'      => DancerVue_admin->to_app;
}

=end comment

=cut

