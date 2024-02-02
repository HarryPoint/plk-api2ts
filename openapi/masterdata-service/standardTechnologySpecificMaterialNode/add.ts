// 标准工艺具体物料节点新增请求对象
export interface I标准工艺具体物料节点新增请求对象 {
    // 当前的标准工艺id, 创建标准工艺阶段 传递null, 编辑标准工艺阶段 传递编辑的标准工艺id
    standardTechnologyId: number;
    // 主物料id
    id: number;
    // BOM名称
    bomName: string;
    // BOM编号
    bomCode: string;
    // 物料BOM详情id(针对所属上级bom的而言的详情id)
    materialBomDetailId: number;
    // 消耗数量(针对所属上级bom而言的消耗数量)
    totalConsumeCount: number;
    // BOM明细
    bomDetailList: 标准工艺具体物料节点新增bom详情请求对象[];
}
// JSONResult«物料BOM编辑响应对象»
export interface IJSONResult物料BOM编辑响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 物料BOM编辑响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
