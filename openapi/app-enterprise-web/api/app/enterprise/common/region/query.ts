import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/公共相关/cascadeGetRegionUsingGET
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListRegionVo>(
        {
            url: "/app-enterprise-web/api/app/enterprise/common/region/query",
            method: "get",
        },
        extraOptions,
    );
}
// JSONResult«List«RegionVo»»
export interface IJSONResultListRegionVo {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IRegionVo[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// RegionVo
export interface IRegionVo {
    // ID
    id: number;
    // 行政区划编码
    code: string;
    // 行政区划名称
    name: string;
    // 行政区域名称拼英 ["bei", "jing"]
    pinYin: Record<string, any>[];
    // 行政区域位置
    location: Record<string, Record<string, any>>;
    // 上级行政区域ID
    parentId: number;
    // 上级行政区域编码
    parentCode: string;
    // 下级行政区域
    children: IRegionVo[];
}
