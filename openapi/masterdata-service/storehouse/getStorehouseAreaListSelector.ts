import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/仓库相关/getStorehouseAreaListSelectorUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<ITheJSONResultListRepositoryAreaTreeReturnsVO>(
        {
            url: "/masterdata-service/storehouse/getStorehouseAreaListSelector",
            method: "get",
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
    ts?: number;
}
/** 仓库区域树返回VO */
export interface ITheWarehouseAreaTreeReturnsVO {
    /** 区域id */
    id?: number;
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
    id?: number;
    /** 仓库名称 */
    name?: string;
    /** 仓库编号 */
    code?: string;
    /** 仓库类型 */
    type?: string;
    /** 仓库类型描述 */
    typeDesc?: string;
    /** 仓位集 */
    warehouseChildren?: IPositionTreeReturnsVO[];
}
/** 仓位树返回VO */
export interface IPositionTreeReturnsVO {
    /** id */
    id?: number;
    /** 仓位名称 */
    name?: string;
    /** 仓位编号 */
    code?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 创建人id */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 区域名称 */
    areaName?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 子仓位 */
    children?: IPositionTreeReturnsVO[];
}
