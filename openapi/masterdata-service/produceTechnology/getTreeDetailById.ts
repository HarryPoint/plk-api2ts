import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产工艺相关/getTreeDetailByIdUsingGET
*/
export default function fetchMethod(params: { id: number; produceOrderId: number }, extraOptions?: any) {
    return http<IJSONResultProductionProcessTreeResponseObject>(
        {
            url: "/masterdata-service/produceTechnology/getTreeDetailById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«生产工艺树状响应对象» */
export interface IJSONResultProductionProcessTreeResponseObject {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProductionProcessTreeResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 生产工艺树状响应对象 */
export interface IProductionProcessTreeResponseObject {
    /** 生产工艺id */
    produceTechnologyId: number;
    /** 生产工艺名称 */
    produceTechnologyName: string;
    /** 物料id(该工艺对应的物料id) */
    materialId: number;
    /** 生产工艺节点响应对象 */
    nodeResponse: IProductionProcessNodeResponseObject;
    /** 整个结构是否有工艺路径 */
    hasRouting: boolean;
}
/** 生产工艺节点响应对象 */
export interface IProductionProcessNodeResponseObject {
    /** 生产工艺id */
    produceTechnologyId: number;
    /** 节点类型 */
    type: string;
    /** 节点数据 -- 不同的节点类型的数据格式不一样 */
    nodeData: Record<string, Record<string, any>>;
    /** 下一节点 */
    nextNode: IProductionProcessNodeResponseObject;
    /** 分支节点列表 */
    branches: IProductionProcessNodeResponseObject[];
    /** 序列号 */
    serialNo: string;
}
