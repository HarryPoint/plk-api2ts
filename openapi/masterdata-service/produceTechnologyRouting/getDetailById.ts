import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/produce-technology-routing-controller/getDetailByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultProduceTechnologyRoutingInfoResponseDTO>(
        {
            url: "/masterdata-service/produceTechnologyRouting/getDetailById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProduceTechnologyRoutingInfoResponseDTO» */
export interface IJSONResultProduceTechnologyRoutingInfoResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProduceTechnologyRoutingInfoResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceTechnologyRoutingInfoResponseDTO */
export interface IProduceTechnologyRoutingInfoResponseDTO {
    /** 工艺路径编码 */
    code?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** id */
    id?: string;
    /** 关联BOM id */
    materialBomId?: string;
    /** 关联物料id */
    materialId?: string;
    /** 工艺路径名称 */
    name?: string;
    /** 生产工艺id */
    produceTechnologyId?: string;
    /** 所属生产工艺物料BOMid */
    produceTechnologyMaterialBomId?: string;
    /** 生产工艺工艺路径步骤 */
    produceTechnologyRoutingStepList?: IProduceTechnologyRoutingStepResponseDTO[];
    /** 所属工艺路径id */
    routingId?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
}
/** ProduceTechnologyRoutingStepResponseDTO */
export interface IProduceTechnologyRoutingStepResponseDTO {
    /** 是否允许直接出站 */
    allowDirectExit?: EProduceTechnologyRoutingStepResponseDTO_allowDirectExit;
    /** BOM物料消耗确认类型 */
    bomConsumeSureType?: EProduceTechnologyRoutingStepResponseDTO_bomConsumeSureType;
    /** 配置块的顺序数组(前端用于保存每个配置块的顺序) */
    configModuleSortArray?: Record<string, any>[];
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** id */
    id?: string;
    /** 进出站类型 */
    inOutType?: EProduceTechnologyRoutingStepResponseDTO_inOutType;
    /** 进站关键参数id */
    moveInKeyParameterId?: string;
    /** 出站关键参数id */
    moveOutKeyParameterId?: string;
    /** 所属工序id */
    processId?: string;
    /** 所属工序名称 */
    processName?: string;
    /** 所属生产工艺产能id */
    produceTechnologyCapacityId?: string;
    /** 所属生产工艺工费id */
    produceTechnologyLaborCostId?: string;
    /** 所属生产工艺工艺卡id */
    produceTechnologyProcessSheetId?: string;
    /** 生产工艺工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 工艺路径id */
    routingId?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 物料消耗 */
    routingStepBomDetailList?: IProduceTechnologyRoutingStepBomDetailResponseDTO[];
    /** 工艺路径步骤id */
    routingStepId?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
}
/** ProduceTechnologyRoutingStepBomDetailResponseDTO */
export interface IProduceTechnologyRoutingStepBomDetailResponseDTO {
    /** 所属bom物料编号 */
    childMaterialCode?: string;
    /** 所属bom物料id */
    childMaterialId?: string;
    /** 所属bom物料名称 */
    childMaterialName?: string;
    /** 所属主物料bom明细id */
    produceTechnologyMaterialBomDetailId?: string;
    /** 总消耗 */
    totalConsumeCount?: number;
}

export enum EProduceTechnologyRoutingStepResponseDTO_allowDirectExit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProduceTechnologyRoutingStepResponseDTO_bomConsumeSureType {
    /** 在进站时确认 */
    MOVE_IN = "MOVE_IN",
    /** 在出站时确认 */
    MOVE_OUT = "MOVE_OUT"
}

export enum EProduceTechnologyRoutingStepResponseDTO_inOutType {
    /** 部分进出 */
    PART = "PART",
    /** 整进整出 */
    ALL = "ALL"
}
