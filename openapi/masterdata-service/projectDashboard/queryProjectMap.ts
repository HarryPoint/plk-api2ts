import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目大屏相关/queryProjectMapUsingPOST
*/
export default function fetchMethod(options: { data: IProjectKanbanQueryDto }, extraOptions?: any) {
    return http<IJSONResultListProjectMapResponseObject>(
        {
            url: "/masterdata-service/projectDashboard/queryProjectMap",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目看板查询dto */
export interface IProjectKanbanQueryDto {
    /** 开始日期 */
    beginTime?: number;
    /** 结束日期 */
    endTime?: number;
    /** 项目大类 */
    projectCategory?: string;
    /** undefined */
    projectTypeIds?: string[];
    /** undefined */
    excludeProjectIds?: string[];
}
/** JSONResult«List«项目地图响应对象»» */
export interface IJSONResultListProjectMapResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectMapResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目地图响应对象 */
export interface IProjectMapResponseObject {
    /** 省份编码 */
    provinceCode?: string;
    /** 省份名称 */
    provinceName?: string;
    /** 项目数量 */
    projectQuantity?: number;
    /** 项目列表 */
    projectList?: IIdCodeNameGenericTransportObject[];
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** id */
    id?: string;
    /** code */
    code?: string;
    /** name */
    name?: string;
}
