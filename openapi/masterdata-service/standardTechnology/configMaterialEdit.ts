import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/标准工艺相关/configMaterialEditUsingPOST
*/
export default function fetchMethod(options: { data: IStandardProcessEditRequestObjectForAClassOfMaterial }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/standardTechnology/configMaterialEdit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺某一类别物料编辑请求对象 */
export interface IStandardProcessEditRequestObjectForAClassOfMaterial {
    /** 标准工艺id, 新增时传递为空 */
    standardTechnologyId?: number;
    /** 标准工艺名称 */
    standardTechnologyName: string;
    /** 所属分类id */
    standardTechnologyCategoryId?: number;
    /** 缩略图 */
    thumbnail?: string;
    /** 是否是暂存 Y暂存 N发布 */
    isStaging: EStandardProcessEditRequestObjectForAClassOfMaterial_isStaging;
    /** 标准工艺节点编辑请求对象 发布时传递 */
    nodeEditRequest: IStandardProcessNodeRespondsToObject1;
    /** 标准工艺画布快照 暂存时必须传递 */
    canvasSnapshot?: Record<string, Record<string, any>>;
    /** 条件组id(该工艺对应的条件组id) */
    standardTechnologyConditionGroupId: number;
    /** 条件来源应用编号 */
    conditionFromFlowPathCode: string;
}
/** 标准工艺节点响应对象_1 */
export interface IStandardProcessNodeRespondsToObject1 {
    /** 节点序列号 */
    serialNo?: string;
    /** 节点名称 */
    name?: string;
    /** 节点类型 */
    type?: EStandardProcessNodeRespondsToObject1_type;
    /** 配置类型 */
    configType?: EStandardProcessNodeRespondsToObject1_configType;
    /** 分支类型 -- 只有分支节点才会有值 */
    branchType?: EStandardProcessNodeRespondsToObject1_branchType;
    /** 节点数据 -- 不同的节点类型的数据格式不一样 */
    nodeData?: Record<string, Record<string, any>>;
    /** 下一节点 */
    nextNode?: IStandardProcessNodeRespondsToObject2;
    /** 分支节点列表 */
    branches?: IStandardProcessNodeRespondsToObject2[];
}
/** 标准工艺节点响应对象_2 */
export interface IStandardProcessNodeRespondsToObject2 {
    /** 节点序列号 */
    serialNo?: string;
    /** 节点名称 */
    name?: string;
    /** 节点类型 */
    type?: EStandardProcessNodeRespondsToObject2_type;
    /** 配置类型 */
    configType?: EStandardProcessNodeRespondsToObject2_configType;
    /** 分支类型 -- 只有分支节点才会有值 */
    branchType?: EStandardProcessNodeRespondsToObject2_branchType;
    /** 节点数据 -- 不同的节点类型的数据格式不一样 */
    nodeData?: Record<string, Record<string, any>>;
    /** 下一节点 */
    nextNode?: IStandardProcessNodeRespondsToObject2;
    /** 分支节点列表 */
    branches?: IStandardProcessNodeRespondsToObject2[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EStandardProcessEditRequestObjectForAClassOfMaterial_isStaging {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EStandardProcessNodeRespondsToObject1_type {
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 工艺路径 */
    ROUTING = "ROUTING",
    /** 条件 */
    CONDITION = "CONDITION",
    /** 分支 */
    BRANCH = "BRANCH"
}

export enum EStandardProcessNodeRespondsToObject1_configType {
    /** 具体 */
    SPECIFIC = "SPECIFIC",
    /** 配置 */
    CONFIGURED = "CONFIGURED"
}

export enum EStandardProcessNodeRespondsToObject1_branchType {
    /** BOM */
    BOM = "BOM",
    /** 条件 */
    CONDITION = "CONDITION"
}

export enum EStandardProcessNodeRespondsToObject2_type {
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 工艺路径 */
    ROUTING = "ROUTING",
    /** 条件 */
    CONDITION = "CONDITION",
    /** 分支 */
    BRANCH = "BRANCH"
}

export enum EStandardProcessNodeRespondsToObject2_configType {
    /** 具体 */
    SPECIFIC = "SPECIFIC",
    /** 配置 */
    CONFIGURED = "CONFIGURED"
}

export enum EStandardProcessNodeRespondsToObject2_branchType {
    /** BOM */
    BOM = "BOM",
    /** 条件 */
    CONDITION = "CONDITION"
}
