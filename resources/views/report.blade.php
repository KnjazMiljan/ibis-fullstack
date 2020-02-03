@extends('layouts.app')
@section('headerScripts')
    <script src="{{ asset('js/customReport.js') }}"></script>
@endsection
@section('navbar')
    @auth
        <nav class="navbar navbar-expand navbar-light bg-white shadow-sm">
            <span class="navbar- nice-text-color">Report</span>
            <div class="collapse navbar-collapse">
                <div class="navbar-nav mr-auto"></div>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item dropdown">
                        <a
                            class="dropdown-item rounded-item border border-darker py-2 px-5 text-decoration-none nice-text-color"
                            href="{{ route('logout') }}"
                            onclick="event.preventDefault();document.getElementById('logout-form').submit();"
                        >
                            {{ __('Logout') }}
                        </a>
                        <div>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        @if(!count($resultSet))
            <nav class="navbar navbar-expand navbar-light bg-white shadow-sm">
                <form class="form-inline" method="POST" action="{{ route('reports') }}">
                    @csrf
                    <input type="hidden" id="macAddressId" name="macAddressId" value="">
                    <div class="form-group autocomplete">
                        <input
                            type="text"
                            class="rounded-item border-darker margin-right {{ $errors->has('macAddressId') ? 'is-invalid' : ''  }}"
                            id="macAddress"
                            name="macAddress"
                            placeholder="Mac: address"
                            value="{{ old('macAddress') }}"
                            autocomplete="off"
                            required="true"
                        />
                    </div>
                    <div class="form-group autocomplete">
                        <input
                            type="text"
                            class="rounded-item border-darker margin-right basicAutoComplete "
                            id="contractId"
                            name="contractId"
                            placeholder="Contract ID"
                            value="{{ old('contractId') }}"
                            autocomplete="off"
                        >
                    </div>
                    <div class="form-group autocomplete">
                        <i class="fa fa-sync margin-right nice-text-color" aria-hidden="true"></i>
                        <button
                            type="submit"
                            class="btn background-lighter rounded-item py-2 px-5 nice-text-color"
                            id="applyFiltersButton"
                        >
                            Apply filters
                        </button>
                    </div>
                </form>
            </nav>
        @endif
    @endauth
@endsection

@section('content')
<div class="container-fluid">
    @if(count($resultSet))
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-5 col-lg-2 col-xl-2">
                <div class="well bg-white shadow-sm">
                    <div class="table-responsive">
                        <table class="table table-borderless mb-0">
                            <tr>
                                <td class="nice-text-color">
                                    MAC address:
                                </td>
                                <td class="text-primary">
                                    {{ $resultSet['contract']['mac_address']['mac_address'] }}
                                </td>
                            </tr>
                            <tr>
                                <td class="nice-text-color">
                                    Contract ID:
                                </td>
                                <td class="text-primary">
                                    {{ $resultSet['contract']['id'] }}
                                </td>
                            </tr>
                            <tr>
                                <td class="nice-text-color">
                                    City:
                                </td>
                                <td class="text-primary">
                                    {{ $resultSet['contract']['city'] }}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-sm-8 col-md-4 col-xs-12 col-lg-8 col-xl-8 text-center">
                <div class="well">
                    <p>&nbsp</p>
                    <div class="well">
                        <a
                            class="date-pill-left{{ $resultSet['oneDayActive'] ? '-active' : '' }} py-2 text-decoration-none"
                            id="switchToOneDay"
                            href="{{ route('reports') }}"
                            title="1 Day mode"
                            onclick="event.preventDefault();getElementById('isOneDayMode').value = '1';document.getElementById('reportForm').submit();"
                        >
                            1 Day
                        </a>
                        <a
                            class="date-pill-right{{ $resultSet['oneDayActive'] ? '' : '-active' }} py-2 text-decoration-none"
                            id="switchToSevenDays"
                            href="{{ route('report') }}"
                            title="7 Days mode"
                            onclick="event.preventDefault();getElementById('isOneDayMode').value = '0';document.getElementById('reportForm').submit();"
                        >
                            7 Days
                        </a>
                    </div>
                    <p class="mt-3">< dateRange (ToDo) ></p>

                    <div>
                        <form id="reportForm" action="{{ route('reports') }}" method="POST" style="display: none;">
                            @csrf
                            <input type="hidden" id="isOneDayMode" name="isOneDayMode" value="true">
                            <input type="hidden" name="macAddressId" value="{{ $resultSet['contract']['mac_address']['id'] }}">
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-sm-2 col-md-3 col-xs-12 col-lg-2 col-xl-2 text-right">
                <div class="well">
                    <a class="rounded-item border border-primary py-2 px-3 text-decoration-none nice-text-color" id="resetFilters" href="{{ route('report') }}">
                        <i class="fa fa-sliders-h margin-right" aria-hidden="true"></i>
                        Reset filters
                    </a>
                </div>
            </div>
        </div>
    @endif
    <ul class="nav nav-tabs py-2" role="tablist">
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#tables">
                Tables
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#graphs">
                Graphs
            </a>
        </li>
    </ul>
    @if(count($resultSet))
        <div class="tab-content">
            <ul class="navbar-nav ml-auto text-right py-3">
                <li class="nav-item dropdown">
                    <button
                        type="button"
                        class="btn rounded-item border border-darker py-1 px-4 text-decoration-none nice-text-color navbar-toggle"
                        data-toggle="collapse"
                        data-target="#hgwInfoTables"
                        id="hgwInfoButtonTables"
                    >
                        HGw Info
                        <i id="carretDown" class="fas fa-angle-down" style="font-size: 1rem;"></i>
                        <i id="carretUp" class="fas fa-angle-up" style="font-size: 1rem; display: none;"></i>
                    </button>
                </li>
            </ul>
            <div id="tables" class="container-fluid tab-pane fade"><br>
                <div class="container-fluid">
                    <div class="row content">
                        <div class="col-sm-3">
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary col-sm-8">
                                                Overall Status
                                            </td>
                                            <td class="text-right">
                                                <span class="badge custom-badge-warning container-fluid">Medium</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary col-sm-8">
                                                RSS Status
                                            </td>
                                            <td class="text-right">
                                                <span class="badge badge-danger container-fluid">Bad</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary col-sm-8">
                                                Client RSS Status
                                            </td>
                                            <td class="text-right">
                                                <span class="badge custom-badge-warning container-fluid">Medium</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary col-sm-8">
                                                Sticky Client Status
                                            </td>
                                            <td class="text-right">
                                                <span class="badge badge-success container-fluid">Good</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary col-sm-8">
                                                Interference Status - overall
                                            </td>
                                            <td class="text-right">
                                                <span class="badge custom-badge-warning container-fluid">Medium</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary col-sm-8">
                                                Interference Status Co- Channel
                                            </td>
                                            <td class="text-right">
                                                <span class="badge badge-success container-fluid">Good</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary col-sm-8">
                                                Interference Status - Adjecent
                                            </td>
                                            <td class="text-right">
                                                <span class="badge badge-danger container-fluid">Bad</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary col-sm-12" colspan="4">
                                                HGw Interference
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="col-sm-3 nice-text-color">
                                                <small>UniFi</small>
                                            </td>
                                            <td class="col-sm-3">
                                                <span class="badge badge-success container-fluid">
                                                    Good
                                                </span>
                                            </td>
                                            <td class="text-default col-sm-3 nice-text-color">
                                                <small>Home</small>
                                            </td>
                                            <td class="col-sm-3">
                                                <span class="badge custom-badge-warning container-fluid">
                                                    Medium
                                                </span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary col-sm-8 nice-text-color">
                                                Retransmission Status
                                            </td>
                                            <td class="text-right">
                                                <span class="badge badge-danger container-fluid">Bad</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-primary col-sm-8">
                                                Overall Status
                                            </td>
                                            <td class="text-right">
                                                <span class="badge custom-badge-warning container-fluid">Medium</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="col-sm-8 nice-text-color">
                                                <small>Hgw Number of Retransmissions</small>
                                            </td>
                                            <td class="text-right nice-text-color">
                                                <small>5515</small>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="col-sm-10 nice-text-color">
                                                <small>Total Number of Clients</small>
                                            </td>
                                            <td class="text-right nice-text-color">
                                                <small>120</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="col-sm-10 nice-text-color">
                                                <small>Max. Number of concurent clients</small>
                                            </td>
                                            <td class="text-right nice-text-color">
                                                <small>10</small>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary col-sm-12" colspan="4">
                                                HGw Combined status
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="col-sm-10 nice-text-color">
                                                <small>HGw number of clients</small>
                                            </td>
                                            <td class="text-right nice-text-color">
                                                <small>15</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="col-sm-10 nice-text-color">
                                                <small>HGw number of sticky clients</small>
                                            </td>
                                            <td class="text-right nice-text-color">
                                                <small>2</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="col-sm-10 nice-text-color">
                                                <small>Data transfered [GB]</small>
                                            </td>
                                            <td class="text-right nice-text-color">
                                                <small>5.7</small>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary" colspan="5">
                                                HGw Bitrate [Mbps]
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="nice-text-color col-sm-4">
                                                KPI Name
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Min
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Avg
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Max
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Last
                                            </td>
                                        </tr>
                                        <tr class="background-gray">
                                            <td class="nice-text-color col-sm-4">
                                                Bitrate
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                15
                                            </td>
                                            <td class="text-danger col-sm-2">
                                                15
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                15
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                15
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="nice-text-color col-sm-6">
                                                HGW total traffic [GB]
                                            </td>
                                            <td class="nice-text-color col-sm-6 text-right">
                                                5.7
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary" colspan="5">
                                                HGw RSS
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="nice-text-color col-sm-4">
                                                KPI Name
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Min
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Avg
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Max
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Last
                                            </td>
                                        </tr>
                                        <tr class="background-gray">
                                            <td class="nice-text-color col-sm-4">
                                                RSS [dBm]
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                -40
                                            </td>
                                            <td class="text-danger col-sm-2">
                                                -35
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                -30
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                -32
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="table-responsive">
                                    <table class="table table-borderless mb-0">
                                        <tr>
                                            <td class="text-primary" colspan="4">
                                                HGw Interference network RSS
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="nice-text-color col-sm-6">
                                                KPI Name
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Avg
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Max
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                Last
                                            </td>
                                        </tr>
                                        <tr class="background-gray">
                                            <td class="nice-text-color col-sm-6">
                                                RSS [dBm]
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                -42
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                -35
                                            </td>
                                            <td class="nice-text-color col-sm-2">
                                                -40
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="py-3 px-3">
                                    <h3 class="text-primary">
                                        Wifi connection time
                                    </h3>
                                    <canvas id="wifiConnectedTimeDoughnut" width="80" height="45"></canvas>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="py-3 px-3">
                                    <h3 class="text-primary">
                                        HGw Wifi Usage
                                    </h3>
                                    <canvas id="hgwWifiUsageDoughnut" width="80" height="45"></canvas>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="py-3 px-3">
                                    <h3 class="text-primary">
                                        HGw Interference
                                    </h3>
                                    <canvas id="hgwInterferenceDoughnut" width="80" height="45"></canvas>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="py-3 px-3">
                                    <h3 class="text-primary">
                                        HGw Interference Home
                                    </h3>
                                    <canvas id="hgwInterferenceHomeDoughnut" width="80" height="45"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="py-3 px-3">
                                    <h3 class="text-primary">
                                        HGw Channel
                                    </h3>
                                    <div class="table-responsive">
                                        <table class="table table-borderless mb-0">
                                            <tr>
                                                <td class="nice-text-color col-sm-8">
                                                    Auto channel enabled:
                                                </td>
                                                <td class="nice-text-color text-right">
                                                    @if($resultSet['contract']['mac_address']['is_auto_channel_enabled'])
                                                        <i class="fas fa-check text-success"></i>
                                                        Yes
                                                    @else
                                                        No
                                                    @endif
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="nice-text-color col-sm-8">
                                                    Current channel:
                                                </td>
                                                <td class="nice-text-color text-right">
                                                    {{ $resultSet['contract']['mac_address']['channel'] }}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="nice-text-color col-sm-8">
                                                    Number of channel changes:
                                                </td>
                                                <td class="nice-text-color text-right">
                                                    25
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                    <canvas id="hgwChannelDoughnut" width="80" height="45"></canvas>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="py-3 px-3">
                                    <h3 class="text-primary">
                                        GHw Percent of time with Sticky Clients
                                    </h3>
                                    <canvas id="hgwStickyTimeDoughnut" width="80" height="45"></canvas>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="py-3 px-3">
                                    <h3 class="text-primary">
                                        HGw Client's RSS Status
                                    </h3>
                                    <canvas id="hgwClientRssDoughnut" width="80" height="45"></canvas>
                                </div>
                            </div>
                            <div class="well bg-white shadow-sm mb-3">
                                <div class="py-3 px-3">
                                    <h3 class="text-primary">
                                        HGw Rss Status
                                    </h3>
                                    <canvas id="hgwRssStatusDoughnut" width="80" height="45"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-3 sidenav hidden-xs">
                            <div class="well bg-white shadow-sm">
                                <div class="container">
                                    <div class="collapse navbar-collapse py-3" id="hgwInfoTables">
                                        <h2 class="text-center darker-text-color">
                                            HGw Info
                                        </h2>
                                        <hr>
                                        <div class="table-responsive">
                                            <table class="table table-borderless mb-0">
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Wifi enabled:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        @if($resultSet['contract']['mac_address']['is_wifi_enabled'])
                                                            <i class="fas fa-check text-success"></i>
                                                            Yes
                                                        @else
                                                            No
                                                        @endif
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        HGW standard:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['hgw_standard'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        IP Address:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['ip_address'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Mac:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['mac_address'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Contract No:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['contract_id'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Auto channel enabled:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        @if($resultSet['contract']['mac_address']['is_auto_channel_enabled'])
                                                            <i class="fas fa-check text-success"></i>
                                                            Yes
                                                        @else
                                                            No
                                                        @endif
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        SSID:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['ssid'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Channel:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['channel'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Security:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['security'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Band:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['band'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Hidden SSID:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        @if($resultSet['contract']['mac_address']['is_hidden_ssd'])
                                                            <i class="fas fa-check text-success"></i>
                                                            Yes
                                                        @else
                                                            No
                                                        @endif
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Bandwith:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['bandwith'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Up time:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['up_time'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Equipment:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['equipment'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Description:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['description'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        CMTS ID:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['cmts_id'] }}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="nice-text-color">
                                                        Firmware:
                                                    </td>
                                                    <td class="darker-text-color text-right">
                                                        {{ $resultSet['contract']['mac_address']['firmware'] }}
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <br>
                    </div>
                </div>
            </div>
            <div id="graphs" class="container-fluid tab-pane active"><br>
                <h3>Graphs</h3>
                <div class="col-md-4 custom-control-inline">
                    <canvas id="hgwStatus" width="600" height="400"></canvas>
                </div>
                <div class="col-md-4 custom-control-inline">
                    <canvas id="hgwInterference" width="600" height="400"></canvas>
                </div>
            </div>
        </div>
    @endif
</div>
@endsection
@section('scripts')
    @if(count($resultSet))
        <script src="{{ asset('js/hgwCharts.js') }}"></script>
    @else
    <script>
        const macsAndContracts = {!! isset($data) ? json_encode($data) : [] !!};
        let searchableContracts = [];
        let searchableMacAddresses = [];
        let macAddressSpecs = [];
        // Use to fetch ID and send it to backend

        macsAndContracts.map(obj => {
            searchableContracts.push({
                'value': obj.contractId.toString()
            });
            searchableMacAddresses.push({
                'value': obj.macAddress.value,
                'macAddressId': obj.macAddress.id.toString()
            });
            macAddressSpecs.push(obj.macAddress);
        });

        setInputFilter($('#contractId')[0], function(value) {
            // Allow only digits which does not start with 0 or nothing
            return /^[1-9][0-9]{0,10}|^$/.test(value);
        }, searchableContracts, true, macsAndContracts, $('#macAddress')[0]);

        setInputFilter($('#macAddress')[0], function(value) {
            // Validate each input step and prevent user to provide invalid input
            return isValidMacAddress(value);
        }, searchableMacAddresses, macsAndContracts, $('#macAddress')[0]);

        $('#applyFiltersButton').on('click', function(e){
            // e.preventDefault();

            let macAddressId;

            macAddressSpecs.map(macAddress => {
                if(macAddress.value === $('#macAddress')[0].value) {
                    macAddressId = macAddress.id
                    $('#macAddressId')[0].value = macAddressId
                }
            });
        });


    </script>
    @endif
@endsection
