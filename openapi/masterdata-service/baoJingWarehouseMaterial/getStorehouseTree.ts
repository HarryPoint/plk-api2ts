import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶即时库存查询相关/getStorehouseTreeUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListAreaWarehouseLocationTreeReturnsVO>(
        {
            url: "/masterdata-service/baoJingWarehouseMaterial/getStorehouseTree",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«区域仓库仓位树返回VO»» */
export interface IJSONResultListAreaWarehouseLocationTreeReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheRegionalWarehouseLocationTreeReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 区域仓库仓位树返回VO */
export interface ITheRegionalWarehouseLocationTreeReturnsVO {
    /** id */
    id?: string;
    /** 区域名称 */
    name?: string;
    /** 区域名称 */
    code?: string;
    /** 子区域 */
    children?: ITheRegionalWarehouseLocationTreeReturnsVO[];
    /** 仓库-仓位树 */
    warehouseStorehouseTree?: ITheWarehouseLocationTreeReturnsVO[];
}
/** 仓库仓位树返回VO */
export interface ITheWarehouseLocationTreeReturnsVO {
    /** id */
    id?: string;
    /** 仓库/仓位名称 */
    name?: string;
    /** 仓库/仓位编号 */
    code?: string;
    /** 子仓库/仓位 */
    children?: ITheWarehouseLocationTreeReturnsVO[];
}
