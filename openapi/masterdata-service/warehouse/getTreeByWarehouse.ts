import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓位相关/getTreeByWarehouseUsingGET
*/
export default function fetchMethod(options: { params: { StorehouseId?: string; EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListPositionTreeReturnsVO>(
        {
            url: "/masterdata-service/warehouse/getTreeByWarehouse",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«仓位树返回VO»» */
export interface IJSONResultListPositionTreeReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPositionTreeReturnsVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 仓位树返回VO */
export interface IPositionTreeReturnsVO {
    /** 区域名称 */
    areaName?: string;
    /** 子仓位 */
    children?: IPositionTreeReturnsVO[];
    /** 仓位编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 仓位名称 */
    name?: string;
    /** 仓库名称 */
    storehouseName?: string;
}
