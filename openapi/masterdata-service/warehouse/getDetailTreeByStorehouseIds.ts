import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓位相关/getDetailTreeByStorehouseIdsUsingPOST
*/
export default function fetchMethod(options: { data: IIdCollectionInformation, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListPositionTreeDetailsAreReturnedToVO>(
        {
            url: "/masterdata-service/warehouse/getDetailTreeByStorehouseIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids?: string[];
}
/** JSONResult«List«仓位树详情返回VO»» */
export interface IJSONResultListPositionTreeDetailsAreReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPositionTreeDetailsBackToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 仓位树详情返回VO */
export interface IPositionTreeDetailsBackToVO {
    /** 区域编号 */
    areaCode?: string;
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
    /** 子仓位 */
    children?: IPositionTreeDetailsBackToVO[];
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
    /** 库存数量 */
    quantity?: number;
    /** 仓库编号 */
    storehouseCode?: string;
    /** 仓库id */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
}
