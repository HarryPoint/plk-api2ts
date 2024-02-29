import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16500/doc.html#/default/流程版本相关/getByIdNotCheckUsingGET_1
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultProcessVersionRespondsToVO>(
        {
            url: "/flow-service/flowPathVersion/getVOByIdNotCheck",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«流程版本响应VO» */
export interface IJSONResultProcessVersionRespondsToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessVersionRespondsToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程版本响应VO */
export interface ITheProcessVersionRespondsToVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 所属流程id */
    flowPathId?: string;
    /** 版本排名 */
    versionRank?: number;
    /** 是否是系统流程 */
    isSystem?: ETheProcessVersionRespondsToVO_isSystem;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 简介 */
    description?: string;
    /** 发布终端值合计 */
    publishTotal?: number;
    /** 是否是多流程 */
    isMultiFlow?: ETheProcessVersionRespondsToVO_isMultiFlow;
}

export enum ETheProcessVersionRespondsToVO_isSystem {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessVersionRespondsToVO_isMultiFlow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
