import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/生产工艺相关/getTreeDetailByIdUsingGET
*/
export default function fetchMethod(options: { params: { Id?: string; ProduceOrderId?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionProcessTreeResponseObject>(
        {
            url: "/masterdata-service/produceTechnology/getTreeDetailById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产工艺树状响应对象» */
export interface IJSONResultProductionProcessTreeResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionProcessTreeResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产工艺树状响应对象 */
export interface IProductionProcessTreeResponseObject {
    /** 整个结构是否有工艺路径 */
    hasRouting?: boolean;
    /** 物料id(该工艺对应的物料id) */
    materialId?: string;
    /** 生产工艺节点响应对象 */
    nodeResponse?: IProductionProcessNodeResponseObject;
    /** 生产工艺id */
    produceTechnologyId?: string;
    /** 生产工艺名称 */
    produceTechnologyName?: string;
}
/** 生产工艺节点响应对象 */
export interface IProductionProcessNodeResponseObject {
    /** 分支节点列表 */
    branches?: IProductionProcessNodeResponseObject[];
    /** 下一节点 */
    nextNode?: IProductionProcessNodeResponseObject;
    /** 节点数据 -- 不同的节点类型的数据格式不一样 */
    nodeData?: Record<string, Record<string, any>>;
    /** 生产工艺id */
    produceTechnologyId?: string;
    /** 序列号 */
    serialNo?: string;
    /** 节点类型 */
    type?: EProductionProcessNodeResponseObject_type;
}

export enum EProductionProcessNodeResponseObject_type {
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 工艺路径 */
    ROUTING = "ROUTING",
    /** 分支 */
    BRANCH = "BRANCH"
}
