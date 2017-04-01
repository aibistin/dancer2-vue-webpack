package DancerVue;
use Dancer2;
use Data::Dump qw/dump/;
use Dancer2::Plugin::REST;

our $VERSION = '0.1';

prepare_serializer_for_format;

#-------------------------------------------------------------------------------
#  Routes
#-------------------------------------------------------------------------------

get q{/} => sub { 
    debug "Get Home Route";
    template 'index';
};

get q{/projects} => sub { 
    debug "Get Projects Route";
    # Render a blank form
    template 'form';
};

post q{/projects.:format} => sub {
    my ( $input, $name, $desc );
    debug "POST projects route";
    $name = body_parameters->get("name");
    $desc = body_parameters->get("description");

    if ( $name and $desc ) {
        debug "Got Name: <$name>";
        debug "Got Desc: <$desc>";
    }
    else {
        my %e;
        $e{name}        = ["Missing project name"]        unless $name;
        $e{description} = ["Missing project description"] unless $desc;
         error qq{Returning Errors: } . ( dump \%e);
        return status_422( \%e );
    }
    status_created( { message => ["Created a new project with name, $name and description, $desc\n"] } );
};

#-------------------------------------------------------------------------------
#  End
#-------------------------------------------------------------------------------
true;
