import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/行政区控制器/queryAllRegionUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListRegionVo>(
        {
            url: "/masterdata-service/region/query",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«RegionVo»» */
export interface IJSONResultListRegionVo {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IRegionVo[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** RegionVo */
export interface IRegionVo {
    /** 下级行政区域 */
    children?: IRegionVo[];
    /** 行政区划编码 */
    code?: string;
    /** ID */
    id?: string;
    /** 行政区域位置 */
    location?: Record<string, Record<string, any>>;
    /** 行政区划名称 */
    name?: string;
    /** 上级行政区域编码 */
    parentCode?: string;
    /** 上级行政区域ID */
    parentId?: string;
    /** 行政区域名称拼英 ["bei", "jing"] */
    pinYin?: Record<string, any>[];
}
