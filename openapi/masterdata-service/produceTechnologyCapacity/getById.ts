import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产工艺产能相关/getByIdUsingGET_9
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProduceTechnologyCapacityResponseDTO>(
        {
            url: "/masterdata-service/produceTechnologyCapacity/getById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProduceTechnologyCapacityResponseDTO» */
export interface IJSONResultProduceTechnologyCapacityResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProduceTechnologyCapacityResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceTechnologyCapacityResponseDTO */
export interface IProduceTechnologyCapacityResponseDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 产能编号 */
    code?: string;
    /** 产能名称 */
    name?: string;
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EProduceTechnologyCapacityResponseDTO_readyTimeUnit;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: EProduceTechnologyCapacityResponseDTO_capacityTimeType;
    /** 产出数量 */
    capacityProduceQuantity?: number;
}

export enum EProduceTechnologyCapacityResponseDTO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EProduceTechnologyCapacityResponseDTO_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
