function ShodanData({data}) {
    return <div>
        {data.ip && <p>{data.ip}</p>}
        {data.ip_str && <p>{data.ip_str}</p>}
        {data.city && <p>{data.city}</p>}
        {data.region_code && <p>{data.region_code}</p>}
        {data.os && <p>{data.os}</p>}
        {data.tags && <p>{data.tags}</p>}
        {data.isp && <p>{data.isp}</p>}
        {data.area_code && <p>{data.area_code}</p>}
        {data.longitude && <p>{data.longitude}</p>}
        {data.last_update && <p>{data.last_update}</p>}
        {data.ports && <p>{data.ports}</p>}
        {data.latitude && <p>{data.latitude}</p>}
        {data.hostnames && <p>{data.hostnames}</p>}
        {data.country_code && <p>{data.country_code}</p>}
        {data.country_name && <p>{data.country_name}</p>}
        {data.domains && <p>{data.domains}</p>}
        {data.org && <p>{data.org}</p>}
        {data.asn && <p>{data.asn}</p>}

        {/* shodan data details - nowy komponent */}
        {/* {data.data && <p>{data.data}</p>} */}


    </div>
}

export default ShodanData;