import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/库存查询相关/getStorehouseTreeUsingGET_1
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListRepositoryAreaTreeReturnsVO>(
        {
            url: "/masterdata-service/warehouseMaterial/getStorehouseTree",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«仓库区域树返回VO»» */
export interface ITheJSONResultListRepositoryAreaTreeReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheWarehouseAreaTreeReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 仓库区域树返回VO */
export interface ITheWarehouseAreaTreeReturnsVO {
    /** 区域id */
    id?: string;
    /** 区域名称 */
    name?: string;
    /** 区域编号 */
    code?: string;
    /** 下级区域集 */
    areaChildren?: ITheWarehouseAreaTreeReturnsVO[];
    /** 仓库集 */
    storehouseChildren?: ITheWarehouseTreeReturnsVO[];
}
/** 仓库树返回VO */
export interface ITheWarehouseTreeReturnsVO {
    /** id */
    id?: string;
    /** 仓库名称 */
    name?: string;
    /** 仓库编号 */
    code?: string;
    /** 仓库类型 */
    type?: ETheWarehouseTreeReturnsVO_type;
    /** 仓库类型描述 */
    typeDesc?: string;
    /** 仓位集 */
    warehouseChildren?: IPositionTreeReturnsVO[];
}
/** 仓位树返回VO */
export interface IPositionTreeReturnsVO {
    /** id */
    id?: string;
    /** 仓位名称 */
    name?: string;
    /** 仓位编号 */
    code?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 区域名称 */
    areaName?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 子仓位 */
    children?: IPositionTreeReturnsVO[];
}

export enum ETheWarehouseTreeReturnsVO_type {
    /** 实体仓 */
    PHYSICAL = "PHYSICAL",
    /** 线边仓 */
    LINE_SIDE = "LINE_SIDE",
    /** WIP */
    WIP = "WIP"
}
