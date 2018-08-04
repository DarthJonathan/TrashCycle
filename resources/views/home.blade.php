@extends('layouts.app')

@section('content')
<div id="users" class="col-lg-12" data-token="{!! Session::get('token') !!}"></div>
@endsection
