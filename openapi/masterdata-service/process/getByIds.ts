import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/工序相关/getByIdsUsingPOST_3
*/
export default function fetchMethod(options: { data: string[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListBaseVO>(
        {
            url: "/masterdata-service/process/getByIds",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«基础VO»» */
export interface IJSONResultListBaseVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBasicVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 基础VO */
export interface IBasicVO {
    /** id */
    id?: string;
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 创建员工id */
    createUserId?: string;
    /** 创建部门id */
    createDeptId?: string;
    /** 创建时间 */
    createTime?: number;
    /** 修改账户id */
    updateUserId?: string;
    /** 修改部门id */
    updateDeptId?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 企业id */
    enterpriseId?: string;
    /** 所属区域id */
    areaId?: string;
    /** 工序名称 */
    name?: string;
    /** 工序编号 */
    code?: string;
    /** 准备时间 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EBasicVO_readyTimeUnit;
    /** 生产时间 */
    produceTime?: number;
    /** 生产时间单位 */
    produceTimeUnit?: EBasicVO_produceTimeUnit;
    /** 产出数量 */
    produceQuantity?: number;
    /** 准备工费（元） */
    readyPrice?: number;
    /** 合格产出工费（元） */
    producePrice?: number;
    /** 返工产出工费（元） */
    backProducePrice?: number;
}

export enum EBasicVO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EBasicVO_produceTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
