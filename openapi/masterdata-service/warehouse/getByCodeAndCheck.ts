import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/仓位相关/getByCodeAndCheckUsingPOST_1
*/
export default function fetchMethod(options: { params: { code?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPositionVO>(
        {
            url: "/masterdata-service/warehouse/getByCodeAndCheck",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«仓位VO» */
export interface IJSONResultPositionVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPositionVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 仓位VO */
export interface IPositionVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 所属仓库id */
    storehouseId?: string;
    /** 父级id */
    parentId?: string;
    /** 仓位名称 */
    name?: string;
    /** 仓位编号 */
    code?: string;
    /** 是否默认仓位 - 针对整个工厂唯一默认有一个仓位，非仓库下自动创建的默认仓位 */
    isDefault?: EPositionVO_isDefault;
    /** 仓位类型 */
    type?: EPositionVO_type;
    /** WIP类型 - WIP时有值 */
    wipType?: EPositionVO_wipType;
    /** 所属工艺路径id - WIP时有值 */
    routingId?: string;
    /** 所属区域id */
    areaId?: string;
}

export enum EPositionVO_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPositionVO_type {
    /** 实体仓 */
    PHYSICAL = "PHYSICAL",
    /** 线边仓 */
    LINE_SIDE = "LINE_SIDE",
    /** WIP */
    WIP = "WIP"
}

export enum EPositionVO_wipType {
    /** 在制前 */
    BEFORE = "BEFORE",
    /** 在制中 */
    IN = "IN"
}
