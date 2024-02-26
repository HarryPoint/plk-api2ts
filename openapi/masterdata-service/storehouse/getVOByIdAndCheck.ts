import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/仓库相关/getVOByIdAndCheckUsingGET_2
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; id?: number } }, extraOptions?: any) {
    return http<IJSONResultWarehouseVO>(
        {
            url: "/masterdata-service/storehouse/getVOByIdAndCheck",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«仓库VO» */
export interface IJSONResultWarehouseVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IWarehouseVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 仓库VO */
export interface IWarehouseVO {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 所属区域id */
    areaId?: number;
    /** 仓库名称 */
    name?: string;
    /** 仓库编号 */
    code?: string;
    /** 仓库地址 */
    address?: string;
    /** 寄售客户id */
    customerId?: number;
    /** 是否默认仓库 - 针对整个工厂唯一默认有一个仓库 */
    isDefault?: EWarehouseVO_isDefault;
    /** 仓库类型 */
    type?: EWarehouseVO_type;
    /** WIP类型 - WIP时有值 */
    wipType?: EWarehouseVO_wipType;
    /** 所属工艺路径id - WIP时有值 */
    routingId?: number;
}

export enum EWarehouseVO_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EWarehouseVO_type {
    /** 实体仓 */
    PHYSICAL = "PHYSICAL",
    /** 线边仓 */
    LINE_SIDE = "LINE_SIDE",
    /** WIP */
    WIP = "WIP"
}

export enum EWarehouseVO_wipType {
    /** 在制前 */
    BEFORE = "BEFORE",
    /** 在制中 */
    IN = "IN"
}
