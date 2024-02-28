import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/质检管理/getWarehouseTreeUsingGET_2
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListWarehouseLocationTreeReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qualityStorageTask/getWarehouseTree",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«仓库仓位树返回VO»» */
export interface IJSONResultListWarehouseLocationTreeReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheWarehouseLocationTreeReturnsVO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 仓库仓位树返回VO_1 */
export interface ITheWarehouseLocationTreeReturnsVO1 {
    /** id */
    id?: string;
    /** 仓库/仓位名称 */
    name?: string;
    /** 仓库/仓位编号 */
    code?: string;
    /** 子仓库/仓位 */
    children?: ITheWarehouseLocationTreeReturnsVO1[];
}
