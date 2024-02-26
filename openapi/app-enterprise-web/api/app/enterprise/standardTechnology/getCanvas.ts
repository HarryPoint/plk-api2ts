import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺相关/getCanvasUsingPOST
*/
export default function fetchMethod(data: IStandardProcessCanvasQueryObject, extraOptions?: any) {
    return http<IJSONResultStandardProcessCanvasResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnology/getCanvas",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 标准工艺画布查询对象 */
export interface IStandardProcessCanvasQueryObject {
    /** 标准工艺id */
    standardTechnologyId: number;
}
/** JSONResult«标准工艺画布响应对象» */
export interface IJSONResultStandardProcessCanvasResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IStandardProcessCanvasResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 标准工艺画布响应对象 */
export interface IStandardProcessCanvasResponseObject {
    /** 标准工艺id */
    standardTechnologyId?: number;
    /** 标准工艺名称 */
    standardTechnologyName?: string;
    /** 标准工艺类型 */
    standardTechnologyType?: string;
    /** 标准工艺状态 */
    standardTechnologyStatus?: string;
    /** 所属分类id */
    standardTechnologyCategoryId?: number;
    /** 所属分类名称 */
    standardTechnologyCategoryName?: string;
    /** 物料id(该工艺对应的物料id -- 针对具体物料类型有值) */
    materialId?: number;
    /** 条件组id(该标准工艺对应的条件组id -- 针对某一类别的有值) */
    standardTechnologyConditionGroupId?: number;
    /** 条件来源应用编号(该标准工艺里面的条件字段 只有一个来源) */
    conditionFromFlowPathCode?: string;
    /** 条件来源应用名称(该标准工艺里面的条件字段 只有一个来源) */
    conditionFromFlowPathName?: string;
    /** 标准工艺节点响应对象 */
    nodeResponse?: IStandardProcessNodeResponseObject;
    /** 标准工艺画布快照 草稿状态时有值 */
    canvasSnapshot?: Record<string, Record<string, any>>;
}
/** 标准工艺节点响应对象 */
export interface IStandardProcessNodeResponseObject {
    /** 标准工艺id */
    standardTechnologyId?: number;
    /** 节点id */
    nodeId?: number;
    /** 前一节点id */
    prevNodeId?: number;
    /** 后一节点id */
    nextNodeId?: number;
    /** 所属分支节点id */
    branchNodeId?: number;
    /** 节点序列号 */
    serialNo?: string;
    /** 节点名称 */
    name?: string;
    /** 节点类型 */
    type?: string;
    /** 配置类型 */
    configType?: string;
    /** 分支类型 -- 只有分支节点才会有值 */
    branchType?: string;
    /** 节点数据 -- 不同的节点类型的数据格式不一样 */
    nodeData?: Record<string, Record<string, any>>;
    /** 下一节点 */
    nextNode?: IStandardProcessNodeResponseObject;
    /** 分支节点列表 */
    branches?: IStandardProcessNodeResponseObject[];
}
