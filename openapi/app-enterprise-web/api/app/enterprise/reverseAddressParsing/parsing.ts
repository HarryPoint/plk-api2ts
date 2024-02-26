import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/逆地址解析/parseUsingPOST
*/
export default function fetchMethod(data: ILocationInfo, extraOptions?: any) {
    return http<IJSONResultAddressOutputDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/reverseAddressParsing/parsing",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** LocationInfo */
export interface ILocationInfo {
    /** undefined */
    lat: number;
    /** undefined */
    lng: number;
}
/** JSONResult«AddressOutputDTO» */
export interface IJSONResultAddressOutputDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IAddressOutputDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** AddressOutputDTO */
export interface IAddressOutputDTO {
    /** undefined */
    location: ILocationInfo;
    /** 以行政区划 + 道路 + 门牌号等信息组成的标准格式化地址 */
    address: string;
    /** 地址部件，address不满足需求时可自行拼接 */
    addressComponent: IAddressComponentOutputDTO;
    /** 以结合知名地点形成的描述性地址，更具备人性化特点 */
    formattedAddresses: IFormattedAddressesOutputDTO;
    /** 行政区划信息 */
    adInfo: IAddressRegionInfo;
}
/** AddressComponentOutputDTO */
export interface IAddressComponentOutputDTO {
    /** undefined */
    nation: string;
    /** undefined */
    province: string;
    /** undefined */
    city: string;
    /** undefined */
    district: string;
    /** undefined */
    street: string;
    /** undefined */
    streetNumber: string;
}
/** FormattedAddressesOutputDTO */
export interface IFormattedAddressesOutputDTO {
    /** 推荐使用的地址描述，描述精确性较高 */
    recommend: string;
    /** 粗略位置描述 */
    rough: string;
}
/** AddressRegionInfo */
export interface IAddressRegionInfo {
    /** 国家代码（ISO3166标准3位数字码） */
    nationCode: string;
    /** 行政区划编码 */
    regionCode: string;
    /** 省 */
    province: string;
    /** 市，如果当前城市为省直辖县级区划，city与district字段均会返回此城市 */
    city: string;
    /** 区 */
    district: string;
}
