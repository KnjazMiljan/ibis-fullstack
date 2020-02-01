@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="content">
                <div class="card-body upper_margin">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group row">
                            <div class="col-md-4 offset-md-4">
                                <input
                                    id="email"
                                    type="email"
                                    class="form-control
                                    @error('email') is-invalid
                                    @enderror"
                                    name="email"
                                    value="{{ old('email') }}"
                                    required
                                    autocomplete="email"
                                    placeholder="Username"
                                >
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="input-group col-md-4 offset-md-4">
                                <input
                                    id="password"
                                    type="password"
                                    class="form-control
                                    @error('password') is-invalid @enderror"
                                    name="password"
                                    required autocomplete="current-password"
                                >
                                <div class="input-group-append" id="togglePasswordVisibility" title="">
                                    <span class="input-group-text btn">
                                        <i class="fa fa-eye fa_custom" id="fa-eye"></i>
                                        <i class="fa fa-eye-slash fa_custom fa_hidden" id="fa-eye-slash"></i>
                                    </span>
                                </div>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-4 offset-md-4">
                                <button type="submit" class="btn btn-primary btn-block">
                                    {{ __('Login') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('scripts')
    <script src="{{ asset('js/customLogin.js') }}"></script>
@endsection
